import userFormStyle from './UserFormStyle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import addBtnSvg from '../../image/group-1.svg'

const UserForm = ({ addingList, userInput, setUserInput }) => {


  return (
    <form className={userFormStyle['form-container']} onSubmit={e => addingList(e)}>
      <label htmlFor="userInput" name="userInput"><span className="sr-only">Provide what your goal for today!</span></label>
      <input id="userInput" className={userFormStyle['user-input']} type="text" value={userInput} onChange={e => setUserInput(e.target.value)} />
      <button className={userFormStyle["form-button"]}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  )
}

export default UserForm;

// return (
//   <form className={userFormStyle['form-container']} onSubmit={e => addingList(e)}>
//     <label htmlFor="userInput" name="userInput"><span className="sr-only">Provide what your goal for today!</span></label>
//     <input id="userInput" className={userFormStyle['user-input']} type="text" value={userInput} onChange={e => setUserInput(e.target.value)} />
//     <button className={userFormStyle["form-button"]}>
//       <img src={addBtnSvg} alt="" />
//     </button>
//   </form>
// )