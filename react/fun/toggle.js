const root = document.getElementById('root')

let toggle = false

const handleClick = (e) => {
    e.preventDefault()
    toggle = !toggle
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Toggle Mini App</h1>
            <button onClick={handleClick}>
                {toggle ? "Hide Details": "Show Details"}
            </button>
            {toggle && <p>{"Hey. Made you Click!"}</p>}
        </div>
    )

    ReactDOM.render(template, root)
}

render()