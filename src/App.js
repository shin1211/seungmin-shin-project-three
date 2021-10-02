import realtime from './firebase.js'
import UserForm from './UserForm.js';
import DisplayList from './DisplayList.js';
import { ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [inputList, setInputList] = useState([]);

  useEffect(() => {
    const dbRef = ref(realtime);
    onValue(dbRef, (snapshot) => {
      const myList = snapshot.val();
      console.log(myList);
    })
  }, [])

  return (
    <div className="App">
      <header className="">
        <h1>Daily Log App</h1>
        <UserForm
          userInput={setInput}
          addToList={setInputList}
          inputList={inputList}
          input={input}
        />
      </header>
      <main>
        <section className="list-container">
          <ul>
            <DisplayList
              inputList={inputList}
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
