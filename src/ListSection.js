const ListSection = (props) => {

	return (
		<section className="current-list-container">
			<div className="wrapper">
				<div className="list-bar">
					<h2>How many:{props.inputList.length}</h2>
					<button onClick={props.addFullList}>Complate List</button>
				</div>
				<ul className="current-list">
					{props.children}
				</ul>
			</div>
		</section>
	)
}

export default ListSection;