// All components and containers
import realtime from './firebase.js';
import MainContainer from './containers/MainContainer.js';
import UserForm from './components/userForm/UserForm.js';
import CurrentList from './components/currentList/CurrentList.js';
import OldList from './components/oldList/OldList.js';
import Modal from './components/modal/Modal.js';
// 
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import { useState, useEffect } from 'react';
import { ref, onValue, push, remove, update } from 'firebase/database';

import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [inputList, setInputList] = useState([]);
  const [completedListsDate, setCompletedListsDate] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState(new Date());

  // grab all current and previous user data list from firebase and push into setInputList() and completedListAll.
  useEffect(() => {
    // Create a reference to our realtime database with specific name 'currentList' which is going to store the user current list.
    const dbRef = ref(realtime, 'currentList');
    const oldDbRef = ref(realtime, 'prvList');

    onValue(dbRef, (snapshot) => {
      const myList = snapshot.val();
      const newArray = [];
      for (let item in myList) {

        const listObj = {
          key: item,
          toDo: myList[item].toDo,
          isCompleted: myList[item].isCompleted,
        }

        newArray.push(listObj);
      }
      setInputList(newArray);
    });

    // 
    onValue(oldDbRef, (snapshot) => {
      const oldList = snapshot.val();
      const listsDate = Object.keys(oldList);
      setCompletedListsDate(listsDate);
    })
  }, []);

  // Check if the user has input any value, and push to Firebase currentList.
  const addingList = (e) => {
    e.preventDefault();
    if (userInput) {
      const dbRef = ref(realtime, 'currentList');
      const inputData = {
        toDo: userInput,
        isCompleted: false,
      }
      push(dbRef, inputData);
      setUserInput('');
    } else {
      alert("Please enter the today's goal");
    }
  }

  // Check if the user has inputList any value, and push to Firebase prvList.
  const addFullList = (userComment) => {
    const currentDate = new Date().toISOString().split('T')[0];
    const prvList = ref(realtime, 'prvList/' + currentDate);
    const currentList = ref(realtime, 'currentList');
    if (inputList.length === 0) {
      alert("You haven't even started yet")
    } else {

      let newObj = inputList.reduce((prev, curr) => {
        prev[curr.key] = {
          toDo: curr.toDo,
          isCompleted: curr.isCompleted,
        }
        return prev;
      }, { comment: userComment });     // grab user comments when user click the End day (addFullList) button
      update(prvList, newObj);
      remove(currentList);

    }

  }
  // completed function : when user click the tick button, grab a specific data from firebase and update!
  const completedList = (key, isCompletedBool) => {
    // This data that will be updated to specific firebase data.
    const updateData = {
      isCompleted: !isCompletedBool,
    }
    const specificData = ref(realtime, `currentList/${key}`);
    update(specificData, updateData);

  }
  // Delte function : when user click del button, grab a specific data from firebase and delete 
  const delList = (key) => {
    const specificData = ref(realtime, `currentList/${key}`);
    remove(specificData);
  }

  const onChange = (nextValue, event) => {
    event.preventDefault();
    setValue(nextValue);
  }

  const tileContent = ({ date, view }) => {
    if (completedListsDate.includes(date.toISOString().split('T')[0])) {
      return <div className='dot' aria-label="showing red dot when there are some data in specific day"></div>
    }
  }


  return (
    <div className="content-wrap">
      <header className="wrapper">
        <h1>Daily Log</h1>
      </header>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          addFullList={addFullList}
        />
      )}
      <MainContainer>

        <UserForm
          setUserInput={setUserInput}
          userInput={userInput}
          addingList={addingList}
        />

        <CurrentList
          inputList={inputList}
          completedList={completedList}
          delList={delList}
          setOpenModal={setOpenModal}
        />

        <Calendar
          onChange={onChange}
          value={value}
          tileContent={tileContent}
        />

        <OldList date={value} />
      </MainContainer>



      <footer>
        <p>Created at Juno College</p>
      </footer>
    </div>
  );
}

export default App;
