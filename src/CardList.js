
const CardList = ({ list }) => {
  return (
    <li >
      <ul className="old-list">
        <h3>Date need to be updated</h3>
        {list.map(res => (<li key={res.key} className={res.isCompleted ? 'completed' : null}><p>{res.toDo}</p></li>))
        }
      </ul >
    </li >
  )
}


export default CardList