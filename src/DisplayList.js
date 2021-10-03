import realtime from './firebase';
import { ref, remove } from 'firebase/database'


const DisplayList = (props) => {
	const delList = (key) => {
		const specificData = ref(realtime, key);
		remove(specificData);
	}
	return (
		props.inputList.map(res => {

			return (
				<li key={res.key}>
					<p>{res.toDo}</p>
					<button onClick={() => delList(res.key)}>Del</button>
				</li >
			)
		})
	)
}


export default DisplayList;