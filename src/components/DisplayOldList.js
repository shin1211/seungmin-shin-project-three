
const DisplayOldList = ({ date, oldList }) => {
  console.log(oldList)
  return (
    <>
      {oldList.length === 0 ? null : (
        <section>
          <div className="wrapper">
            <ul className="old-list">
              <p>{date.toISOString().split('T')[0]}</p>
              {
                oldList.map((listData) => {
                  return (
                    <li key={listData.key} className={listData.isCompleted ? 'completed' : null}>
                      <p>{listData.toDo}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
      )}
    </>


  )
}


export default DisplayOldList;
