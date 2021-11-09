
const ListSection = ({ inputList, openModal, setOpenModal, children }) => {

	const handleShowModal = () => {
		if (inputList.length === 0) {
			alert('no')
		} else {
			setOpenModal(true)
		}
	}
	return (
		<section className="current-list-container">
			<div className="wrapper">
				<div className="list-bar">
					<h2>Number Of Tasks: {inputList.length}</h2>
					<button onClick={handleShowModal} className="finish-button">Finish My Day</button>
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