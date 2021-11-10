import currentListStyle from './CurrentListStyle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

const CurrentList = ({ inputList, completedList, delList, setOpenModal }) => {

  const handleShowModal = () => {
    if (inputList.length === 0) {
      alert('no')
    } else {
      setOpenModal(true)
    }
  }
  return (
    // <section className="current-list-container">
    <div className={currentListStyle["current-list-container"]}>
      <ul className={currentListStyle["current-list"]}>
        {inputList.length === 0 ? (
          <li><p className="none-data">Set up goals to start your day!</p></li>
        ) : (
          inputList.map((res) => {
            return (
              <li key={res.key} className={res.isCompleted ? 'completed' : null}>
                <p>{res.toDo}</p>
                <div className={currentListStyle["btn-container"]}>
                  <button onClick={() => completedList(res.key, res.isCompleted)}><span className="sr-only">Completed</span><FontAwesomeIcon icon={faCheck} /></button>
                  <button onClick={() => delList(res.key)}><span className="sr-only">Delete</span><FontAwesomeIcon icon={faTimes} /></button>
                </div>
              </li >
            )
          })
        )}
      </ul>
      <button onClick={handleShowModal} className={currentListStyle["finish-button"]}>End Day</button>

    </div>
    // </section>⃝
  )
}

export default CurrentList;