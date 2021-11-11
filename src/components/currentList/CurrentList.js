import currentListStyle from './CurrentListStyle.module.css';
import delBtnSvg from '../../image/group-5.svg';
import completedBtnSvg from '../../image/ellipse-3.svg'

const CurrentList = ({ inputList, completedList, delList, setOpenModal }) => {

  const handleShowModal = () => {
    if (inputList.length === 0) {
      alert('There is no data to submit.')
    } else {
      setOpenModal(true)
    }
  }
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div className={currentListStyle["current-list-container"]}>
      <p className={currentListStyle['current-day']}>{currentDate}</p>
      <ul className={currentListStyle["current-list"]}>
        {inputList.length === 0 ? (
          <li>
            <p className="none-data">Set up goals to start your day!</p>
          </li>
        ) : (
          inputList.map((res) => {
            return (
              <li key={res.key} className={res.isCompleted ? 'completed' : null}>
                <p>{res.toDo}</p>
                <div className={currentListStyle["btn-container"]}>
                  <button onClick={() => completedList(res.key, res.isCompleted)}>
                    <span className="sr-only">Completed</span>
                    <img src={completedBtnSvg} alt="" />
                  </button>
                  <button onClick={() => delList(res.key)}>
                    <span className="sr-only">Delete</span>
                    <img src={delBtnSvg} alt="" />
                  </button>
                </div>
              </li >
            )
          })
        )}
      </ul>
      <button onClick={handleShowModal} className={currentListStyle["finish-button"]}>End Day</button>

    </div>
  )
}

export default CurrentList;