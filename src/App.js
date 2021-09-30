import './App.css';
import UserForm from './UserForm.js';
import { useState } from 'react';

function App() {
  console.log(UserForm());

  return (
    <div className="App">
      <header className="">
        <h1>Daily Log App</h1>
        <UserForm />
      </header>
      <main>
        <section className="list-container">
          <ul>

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
