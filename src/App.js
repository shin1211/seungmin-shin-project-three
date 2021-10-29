import realtime from './firebase.js';
import HeaderTemp from './HeaderTemp.js';
import UserForm from './UserForm.js';
import DisplayList from './DisplayList.js';
import ListSection from './ListSection.js';
import OldListSection from './OldListSection.js';

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import { useState, useEffect } from 'react';
import { ref, onValue, push, remove, update } from 'firebase/database';

import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [inputList, setInputList] = useState([]);
  const [oldList, setOldList] = useState([]);
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
  }

  // grab all current user data from firebase and push into setInputList().
  useEffect(() => {
    // Create a reference to our realtime database with specific name 'currentList' which is going to store the user current list.
    const dbRef = ref(realtime, 'currentList');

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
  }, []);

  // grab all prvList data from firebase and push into setOldList().
  useEffect(() => {
    // Create a reference to our realtime database with specific name 'prvList' which is going to store the user completed list.

    const listData = ref(realtime, 'prvList/' + value.toISOString().split('T')[0])
    onValue(listData, (snapshot) => {
      const storeList = snapshot.val();
      const newArray = [];
      for (let item in storeList) {
        const listObj = {
          key: item,
          toDo: storeList[item].toDo,
          isCompleted: storeList[item].isCompleted
        }
        newArray.push(listObj);
      }
      setOldList(newArray);
    })
  }, [value])

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
  const addFullList = () => {
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
      }, {});

      update(prvList, newObj)
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


  return (
    <div className="App">
      <HeaderTemp>
        <UserForm
          setUserInput={setUserInput}
          userInput={userInput}
          addingList={addingList}
        />
      </HeaderTemp>

      <main>
        {/* This component will show the current list that user added */}
        <ListSection inputList={inputList} addFullList={addFullList}>
          <Calendar
            onChange={onChange}
            value={value}
          />
          <DisplayList
            inputList={inputList}
            completedList={completedList}
            delList={delList}
          />
        </ListSection>

        <OldListSection oldList={oldList} date={value} />

      </main>
      <footer>
        <p>Created at Juno College</p>
      </footer>
    </div>
  );
}

export default App;
