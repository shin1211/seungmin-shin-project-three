
const HeaderTemp = (props) => {
    return (
        <header className="wrapper">
            <h1>Daily Log App</h1>
            {props.children}
        </header>
    )
}

export default HeaderTemp;