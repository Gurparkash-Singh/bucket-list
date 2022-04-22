const root = document.getElementById('root')

const app = {
    title: "To Do",
    subtitle: "Make a Computer decide your way of life",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option

    if (option.value){
        app.options.push(option.value)
        option.value = ""
        render()
    }
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const onRandomDecision = () => {
    const random = Math.floor(Math.random() * app.options.length)
    const option = app.options[random]
    alert(option)
}


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options": "No options"}</p>
            <button 
                disabled={app.options.length == 0} 
                onClick={onRandomDecision}
            >
                What Should I Do
            </button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {app.options.map((value, index) => (<li key={index}>{value}</li>))}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, root)
}

render()