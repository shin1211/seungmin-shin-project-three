
const CardList = (props) => {

	return (
		<li >
			<ul className="old-list">
				<h3>Date need to be updated</h3>
				{props.list.map(res => (<li key={res.key}><p>{res.toDo}</p></li>))}
			</ul>
		</li>
	)
}


export default CardList