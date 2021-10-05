import realtime from './firebase.js';
import UserForm from './UserForm.js';
import DisplayList from './DisplayList.js';
import CardList from './CardList.js';
import { useState, useEffect } from 'react';
import { ref, onValue, push, remove } from 'firebase/database';

import './App.css';
import HeaderTemp from './HeaderTemp.js';
import ListSection from './ListSection.js';

function App() {
  const [userInput, setUserInput] = useState('');
  const [inputList, setInputList] = useState([]);
  const [cardList, setCardList] = useState([])
  // const [addCardList, setAddCardList] = useState(false);

  // grab all current user data from firebase and push into setInputList().
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
    // inputList.forEach((res) => {
    //   push(listData, res.toDo)
    // });

    push(listData, inputList)

    remove(currentList);

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
          <DisplayList inputList={inputList} />
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
    </div>
  );
}

export default App;
