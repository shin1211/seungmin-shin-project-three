
const UserForm = ({ addingList, userInput, setUserInput }) => {


  return (
    <form className="form-container" onSubmit={e => addingList(e)}>
      <label htmlFor="userInput" name="userInput"><span className="sr-only">Provide what your goal for today!</span></label>
      <input id="userInput" type="text" value={userInput} onChange={e => setUserInput(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export default UserForm;

