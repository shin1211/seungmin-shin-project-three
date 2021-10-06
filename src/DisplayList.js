import realtime from './firebase';
import { ref, remove } from 'firebase/database'
import { useState } from 'react';


const DisplayList = (props) => {



	const delList = (key) => {
		const specificData = ref(realtime, `currentList/${key}`);
		remove(specificData);
	}
	return (
		props.inputList.map((res, index) => {
			return (
				<li key={res.key} className={res.isCompleted ? 'completed' : null}>
					<p>{res.toDo}</p>
					<div className="btn-container">
						<button onClick={() => props.completedList(res.key)}>✔️</button>
						<button onClick={() => delList(res.key)}>X</button>
					</div>
				</li >
			)
		})
	)
}


export default DisplayList;