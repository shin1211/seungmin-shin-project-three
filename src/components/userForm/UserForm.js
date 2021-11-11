// import UserFormStyle from './UserFormStyle.module.css'
import userFormStyle from './UserFormStyle.module.css'
const UserForm = ({ addingList, userInput, setUserInput }) => {


  return (
    <form className={userFormStyle['form-container']} onSubmit={e => addingList(e)}>
      <label htmlFor="userInput" name="userInput"><span className="sr-only">Provide what your goal for today!</span></label>
      <input id="userInput" className={userFormStyle['user-input']} type="text" value={userInput} onChange={e => setUserInput(e.target.value)} />
      <button className={userFormStyle["form-button"]}>
        <svg id="Group_1" data-name="Group 1" xmlns="http://www.w3.org/2000/svg" width="16.89" height="16.89" viewBox="0 0 16.89 16.89">
          <line id="Line_1" data-name="Line 1" y2="16.89" transform="translate(8.445)" fill="none" stroke="#707070" stroke-width="2" />
          <line id="Line_2" data-name="Line 2" y2="16.89" transform="translate(16.89 8.445) rotate(90)" fill="none" stroke="#707070" stroke-width="2" />
        </svg>
      </button>
    </form>
  )
}

export default UserForm;

