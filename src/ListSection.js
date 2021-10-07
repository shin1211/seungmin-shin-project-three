const ListSection = ({ inputList, addFullList, children }) => {

	return (
		<section className="current-list-container">
			<div className="wrapper">
				<div className="list-bar">
					<h2>Number Of Tasks: {inputList.length}</h2>
					<button onClick={addFullList}>All completed!!</button>
				</div>
				<ul className="current-list">
					{children}
				</ul>
			</div>
		</section>
	)
}

export default ListSection;