import realtime from './firebase';
import { ref, remove } from 'firebase/database'
import { useState } from 'react';


const DisplayList = (props) => {
	const [completed, setComplted] = useState(false);

	const completeList = (e, key) => {
		const parentElement = e.target.parentElement.parentElement;
		console.log(parentElement)
		if (key === parentElement.id) {

			setComplted(!completed);
		}
	}

	const delList = (key) => {
		const specificData = ref(realtime, `currentList/${key}`);
		remove(specificData);
	}
	return (
		props.inputList.map((res, index) => {
			return (
				<li key={res.key} id={res.key} className={completed ? 'not' : 'yes'}>
					<p>{res.toDo}</p>
					<div className="btn-container">
						<button onClick={(e) => completeList(e, res.key)}>✔️</button>
						<button onClick={() => delList(res.key)}>X</button>
					</div>
				</li >
			)
		})
	)
}


export default DisplayList;