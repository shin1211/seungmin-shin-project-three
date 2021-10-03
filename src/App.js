import realtime from './firebase.js'
import UserForm from './UserForm.js';
import DisplayList from './DisplayList.js';
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';

import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [inputList, setInputList] = useState([]);
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    const dbRef = ref(realtime);

    onValue(dbRef, (snapshot) => {
      const myList = snapshot.val();
      const newArray = [];

      for (let item in myList) {
        const listObj = {
          key: item,
          toDo: myList[item]
        }
        newArray.push(listObj);
      }
      setInputList(newArray);
    });
  }, []);

  return (
    <div className="App">
      <header className="">
        <h1>Daily Log App</h1>
        <UserForm
          setUserInput={setUserInput}
          setInputList={setInputList}
          inputList={inputList}
          userInput={userInput}
        />
      </header>
      <main>
        <section className="list-container">
          <ul>
            <span>how many:{inputList.length}</span>
            <DisplayList
              inputList={inputList}
            // setInputList={setInputList}
            />
          </ul>
        </section>

        <section>
          <ul>
            {/* <DisplayList
              inputList={inputList}
            /> */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
