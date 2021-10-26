import realtime from './firebase.js';
import { ref, remove } from 'firebase/database';

const CardList = ({ list, id }) => {
  const delOldLists = (key) => {
    const specificData = ref(realtime, `prvList/${key}`);
    remove(specificData);
  }

  const newArray = [];
  for (let item in list) {
    const newObj = {
      key: item,
      toDo: list[item].toDo,
      isCompleted: list[item].isCompleted,
    }
    newArray.push(newObj);
  }

  return (
    <li>
      <ul className="old-list">
        <h3>{list.date}</h3>
        {newArray.map(res => (
          <li key={res.key} className={res.isCompleted ? 'completed' : null}>
            <p>{res.toDo}</p>
          </li>
        ))
        }
        <button onClick={() => delOldLists(id)}>X</button>
      </ul >
    </li >
  )

  // return (
  //   <li>
  //     <ul className="old-list">
  //       <h3>Date need to be updated</h3>
  //       {list.map(res => (
  //         <li key={res.key} className={res.isCompleted ? 'completed' : null}>
  //           <p>{res.toDo}</p>
  //         </li>
  //       ))
  //       }
  //     </ul >
  //   </li >
  // )
}


export default CardList