import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import realtime from '../firebase';

const DisplayOldList = ({ date }) => {
  const [oldList, setOldList] = useState([]);
  const [userComment, setUserComment] = useState('');

  // grab prvList data by specific date from firebase and push into setOldList().
  useEffect(() => {
    // Create a reference to our realtime database with specific name 'prvList' which will store the user completed list by each date.
    const listData = ref(realtime, 'prvList/' + date.toISOString().split('T')[0])
    onValue(listData, (snapshot) => {
      const storeList = snapshot.val();
      const newArray = [];
      for (let item in storeList) {
        if (item !== 'comment') {
          const listObj = {
            key: item,
            toDo: storeList[item].toDo,
            isCompleted: storeList[item].isCompleted
          }
          newArray.push(listObj);
        }
      }
      setOldList(newArray);
      setUserComment(storeList ? storeList.comment : '');
    })

  }, [date])

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
                <p>{userComment}</p>
              </div>
            </div>
          </section>
        )}
    </>
  )
}


export default DisplayOldList;

