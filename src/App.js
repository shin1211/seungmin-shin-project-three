import realtime from './firebase.js';
import UserForm from './UserForm.js';
import DisplayList from './DisplayList.js';
import CardList from './CardList.js';
import { useState, useEffect } from 'react';
import { ref, onValue, push, remove } from 'firebase/database';

import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [inputList, setInputList] = useState([]);
  const [cardList, setCardList] = useState([])
  // const [addCardList, setAddCardList] = useState(false);

  useEffect(() => {
    const dbRef = ref(realtime, 'currentList');

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
      // setCardList(newArray);
    });
  }, []);


  const addFullList = () => {
    const listData = ref(realtime, 'prvList');
    const currentList = ref(realtime, 'currentList');
    // inputList.forEach((res) => {
    //   push(listData, res.toDo)
    // });

    push(listData, inputList)

    remove(currentList);

  }

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


  return (
    <div className="App">
      <header className="wrapper">
        <h1>Daily Log App</h1>
        <UserForm
          setUserInput={setUserInput}
          setInputList={setInputList}
          inputList={inputList}
          userInput={userInput}
        />
      </header>
      <main>
        <section className="wrapper list-container">
          <ul className="current-list">
            <div className="list-bar">
              <p>how many:{inputList.length}</p>
              <button onClick={addFullList}>Complate List</button>
            </div>
            <DisplayList
              inputList={inputList}
            />
          </ul>
        </section>

        <section className="wrapper">
          <ul className="oldlist-container">
            {
              cardList.map((res) => {
                console.log(res.key);
                return (
                  <CardList
                    key={res.key}
                    list={res.list}
                  />
                )
              })
            }


            {/* <CardList
              cardList={cardList}
              setCardList={setCardList} /> */}

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
