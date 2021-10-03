import { ref, push } from 'firebase/database';
import realtime from './firebase';


const UserForm = (props) => {
  const addingList = (e) => {
    e.preventDefault();

    if (props.userInput) {
      const dbRef = ref(realtime);
      push(dbRef, props.userInput);
      props.setUserInput('');
    } else {
      alert('please');
    }
  }

  return (
    <form action="" onSubmit={addingList}>
      <label htmlFor="userInput">???</label>
      <input id="userInput" type="text" value={props.userInput} onChange={e => props.setUserInput(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export default UserForm;






// const UserForm = (props) => {
//   // console.log(props)
//   const addingList = (e) => {

//     e.preventDefault();
//     props.addToList([...props.inputList, props.input]);
//     props.userInput('');
//   }

//   return (
//     <form action="">
//       <label htmlFor="userInput">???</label>
//       <input id="userInput" type="text" value={props.input} onChange={e => props.userInput(e.target.value)} />
//       <button type="submit" onClick={addingList}>Add</button>
//     </form>
//   )
// }

// export default UserForm;