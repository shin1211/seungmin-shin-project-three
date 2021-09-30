import { useState } from 'react';


const UserForm = () => {
    const [input, setInput] = useState('');
    console.log(input)
    const addingList = (e) => {
        e.preventDefault();
    }
    return (
        <form action="">
            <label htmlFor="userInput">???</label>
            <input id="userInput" type="text" onChange={(e) => {
                setInput(e.target.value)
            }} />
            <button onClick={addingList}>Add</button>
        </form>

    )
}

export default UserForm;