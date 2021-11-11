import currentListStyle from './CurrentListStyle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

const CurrentList = ({ inputList, completedList, delList, setOpenModal }) => {

  const handleShowModal = () => {
    if (inputList.length === 0) {
      alert('There is no data to submit.')
    } else {
      setOpenModal(true)
    }
  }
  return (
    // <section className="current-list-container">
    <div className={currentListStyle["current-list-container"]}>
      <p className={currentListStyle['current-day']}>2021-11-28</p>
      <ul className={currentListStyle["current-list"]}>
        {inputList.length === 0 ? (
          <li><p className="none-data">Set up goals to start your day!</p></li>
        ) : (
          inputList.map((res) => {
            return (
              <li key={res.key} className={res.isCompleted ? 'completed' : null}>
                <p>{res.toDo}</p>
                <div className={currentListStyle["btn-container"]}>
                  <button onClick={() => completedList(res.key, res.isCompleted)}>
                    <span className="sr-only">Completed</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.75" height="16.75" viewBox="0 0 16.75 16.75">
                      <g id="Ellipse_3" data-name="Ellipse 3" transform="translate(0 16.75) rotate(-90)" fill="none" stroke="#707070" stroke-width="2">
                        <ellipse cx="8.375" cy="8.375" rx="8.375" ry="8.375" stroke="none" />
                        <ellipse cx="8.375" cy="8.375" rx="7.375" ry="7.375" fill="none" />
                      </g>
                    </svg>

                  </button>
                  <button onClick={() => delList(res.key)}>
                    <span className="sr-only">Delete</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.418" height="14.418" viewBox="0 0 14.418 14.418">
                      <g id="Group_5" data-name="Group 5" transform="translate(-5.795 7.209) rotate(-45)">
                        <line id="Line_1" data-name="Line 1" y2="18.39" transform="translate(9.195 0)" fill="none" stroke="#707070" stroke-width="2" />
                        <line id="Line_2" data-name="Line 2" y2="18.39" transform="translate(18.39 9.195) rotate(90)" fill="none" stroke="#707070" stroke-width="2" />
                      </g>
                    </svg>
                  </button>
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