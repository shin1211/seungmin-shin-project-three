
const ListSection = ({ inputList, addFullList, children }) => {
	return (
		<section className="current-list-container">
			<div className="wrapper">
				<div className="list-bar">
					<h2>Number Of Tasks: {inputList.length}</h2>
					<button onClick={addFullList} className="finish-button">Finish My Day</button>
				</div>
				<div className="divider">
					{children[0]}
					<ul className="current-list">
						{children[1]}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default ListSection;