import realtime from './firebase';
import { ref, remove } from 'firebase/database'



const DisplayList = (props) => {

	const delList = (key) => {
		const specificData = ref(realtime, `currentList/${key}`);
		remove(specificData);
	}
	return (
		<>
			{props.inputList.length === 0 ? (
				<li><p className="none-data">Start with your first goal for day!</p></li>
			) : (

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
			)}
		</>

	)
}


export default DisplayList;