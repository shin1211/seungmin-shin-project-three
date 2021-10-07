import realtime from './firebase.js';
import UserForm from './UserForm.js';
import DisplayList from './DisplayList.js';
import CardList from './CardList.js';
import { useState, useEffect } from 'react';
import { ref, onValue, push, remove } from 'firebase/database';
import HeaderTemp from './HeaderTemp.js';
import ListSection from './ListSection.js';

import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [inputList, setInputList] = useState([]);
  const [cardList, setCardList] = useState([]);


  // grab all current user data from firebase and push into setInputList().
  useEffect(() => {
    // Create a reference to our realtime database with specific name 'currentList' which is going to store the user current list.
    const dbRef = ref(realtime, 'currentList');

    onValue(dbRef, (snapshot) => {
      const myList = snapshot.val();
      const newArray = [];
      // Loop through the myList object. For each property inside it, 
      for (let item in myList) {
        const listObj = {
          key: item,
          toDo: myList[item],
          isCompleted: false
        }
        newArray.push(listObj);
      }
      setInputList(newArray);
    });
  }, []);

  // grab all prvList data from firebase and push into setCardList().
  useEffect(() => {
    const listData = ref(realtime, 'prvList');

    onValue(listData, (snapshot) => {

      const storeList = snapshot.val();

      const newArray = [];
      for (let item in storeList) {
        const listObj = {
          key: item,
          list: storeList[item]
        }
        newArray.push(listObj);
      }

      setCardList(newArray);
    })

  }, [])

  // onSubmit function to pass on to UserForm.
  const addingList = (e) => {
    e.preventDefault();
    if (userInput) {
      const dbRef = ref(realtime, 'currentList');
      push(dbRef, userInput);
      setUserInput('');
    } else {
      alert('please');
    }
  }

  // adding function 
  const addFullList = () => {
    const listData = ref(realtime, 'prvList');
    const currentList = ref(realtime, 'currentList');
    if (inputList.length === 0) {
      alert('please')
    } else {
      push(listData, inputList)
      remove(currentList);
    }

  }
  // completed function
  const completedList = (key) => {
    setInputList(
      inputList.map(data => {
        if (key === data.key) {
          return {
            ...data, isCompleted: !data.isCompleted
          }
        }
        return data;
      })
    );

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
        <ListSection inputList={inputList} addFullList={addFullList}>
          <DisplayList
            inputList={inputList}
            setInputList={setInputList}
            completedList={completedList}
          />
        </ListSection>

        <section>
          <div className="wrapper">
            <ul className="old-list-container">
              {
                cardList.map((res) => {
                  return (
                    <CardList
                      key={res.key}
                      list={res.list}
                    />
                  )
                })
              }
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <p>Copyright © 2021 Juno College</p>
      </footer>
    </div>
  );
}

export default App;
