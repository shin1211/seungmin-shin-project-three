import { useState } from 'react';


const UserForm = () => {
    const [input, setInput] = useState('');
    const [inputList, setInputList] = useState([]);
    const addingList = (e) => {
        e.preventDefault();
        setInputList([...inputList, input]);
        console.log(inputList);
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