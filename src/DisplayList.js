
const DisplayList = ({ inputList, completedList, delList }) => {

	return (
		<>
			{inputList.length === 0 ? (

				<li><p className="none-data">Set up goals to start your day!</p></li>

			) : (

				inputList.map((res) => {
					return (
						<li key={res.key} className={res.isCompleted ? 'completed' : null}>
							<p>{res.toDo}</p>
							<div className="btn-container">
								<button onClick={() => completedList(res.key, res.isCompleted)}><span className="sr-only">Completed</span>✔️</button>
								<button onClick={() => delList(res.key)}><span className="sr-only">Delete</span>X</button>
							</div>
						</li >
					)
				})

			)}
		</>

	)
}


export default DisplayList;

// prvList = {
// 	MmxOTNEJaY_pmw_c7N_ : {
// 		isCompleted : false,
// 		toDo: 'adsfad',
// 	},
// 	MmxOTNEJaY_pmw_c72_ = {
// 		isCompleted : false,
// 		toDo: 'adsfad',
// 	},
// 	MmxOTNEJaY_pmw_c7N_ = {
// 		isCompleted : false,
// 		toDo: 'adsfad',
// 	}
// }