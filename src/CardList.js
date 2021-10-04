
const CardList = (props) => {
	console.log(props.cardList);
	return (
		<ul className="old-list">
			{props.cardList.map(res => (<li>{res.list}</li>))}
		</ul>

		// props.cardList.map((res) => {
		// 	return (
		// 		<ul>
		// 			<li>{res.list}</li>
		// 		</ul>
		// 	)
		// })
	)
}


export default CardList