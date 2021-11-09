
const DisplayOldList = ({ date, oldList }) => {

  return (
    <>
      {
        oldList.length === 0 ? null : (
          <section className="old-list-container">
            <div className="wrapper">
              <div className="divider">
                <h3>{date.toISOString().split('T')[0]}</h3>
                <ul className="old-list">
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
              <div className="comments-container">
                <h4>Comments:</h4>
                <p>wrrwrwrwr</p>
              </div>
            </div>
          </section>
        )}
    </>
  )
}


export default DisplayOldList;


{/* <>
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
</> */}