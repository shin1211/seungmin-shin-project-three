import './App.css';
import UserForm from './UserForm.js';
import { useState } from 'react'

function App() {

  const [userInput, setUserInput] = useState('');
  console.log(userInput);

  return (
    <div className="App">
      <header className="">

        <h1>Daily Log App</h1>

        <UserForm />

      </header>
      <main>
        <section className="list-container">
          <ul>
            <li>{userInput}</li>
            <li>asd</li>
            <li>asd</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
