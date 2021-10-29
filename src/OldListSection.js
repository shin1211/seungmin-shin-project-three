// import realtime from './firebase.js';
// import { ref, remove } from 'firebase/database';
const OldListSection = ({ date, oldList }) => {

  console.log(date)


  return (
    <section>
      <div className="wrapper">
        <ul>
          <p>{date.toISOString().split('T')[0]}</p>
          {
            oldList.map((listData) => {
              console.log(listData.toDo)
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
  )
}


export default OldListSection;



// const OldListSection = ({ children }) => {
//   return (
//     <section>
//       <div className="wrapper">
//         <ul className="old-list-container">
//           {children}
//         </ul>
//       </div>
//     </section>
//   )
// }

// export default OldListSection;