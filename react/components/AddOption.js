import React from "react"

export default class AddOption extends React.Component{
    state = {
        error: undefined
    }
    
    constructor(props){
        super(props)
    }

    handleAddOption = (e) => {
        e.preventDefault()

        const option = e.target.elements.option

        const error = this.props.handleAddOption(option.value)

        this.setState(() => ({error: error}))
        option.value = ""
    }
    
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}