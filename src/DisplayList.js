
const DisplayList = (props) => {
	// console.log(props.inputList)

	return (
		props.inputList.map((res, index) => {
			return (
				<li key={index}>{res} <button onClick={() => { console.log('clicked') }}>check</button></li>
			)
		})
	)

}


export default DisplayList;