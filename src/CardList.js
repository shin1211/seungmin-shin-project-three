
const CardList = (props) => {
	// const [oldList, setOldList] = useState('');

	// console.log(props.list.toDo);

	// props.list.forEach(res => console.log(res.toDo))

	// return null

	return (

		<li >
			<ul className="old-list">
				{props.list.map(res => (<li key={res.key}>{res.toDo}</li>))}
			</ul>
		</li>

	)
}


export default CardList