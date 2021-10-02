

const UserForm = (props) => {
  // console.log(props)
  const addingList = (e) => {

    e.preventDefault();
    props.addToList([...props.inputList, props.input]);
    // console.log(inputList);
    props.userInput('');
  }

  return (
    <form action="">
      <label htmlFor="userInput">???</label>
      <input id="userInput" type="text" value={props.input} onChange={e => props.userInput(e.target.value)} />
      <button type="submit" onClick={addingList}>Add</button>
    </form>
  )
}

export default UserForm;