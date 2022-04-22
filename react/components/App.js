import React from "react"
import AddOption from "./AddOption"
import Header from "./Header"
import Action from "./Action"
import Options from "./Options"
import OptionModal from "./OptionModal"

class App extends React.Component{
    state = {
        options : this.props.options,
        isSelected: undefined
    }

    constructor(props){
        super(props)
    }
    
    componentDidMount = () => {
        const json = localStorage.getItem("options")
        const options = JSON.parse(json)
        if (json){
            this.setState(() => ({options}))
        }
    }

    componentDidUpdate = () => {
        const json = JSON.stringify(this.state.options)
        localStorage.setItem("options", json)
    }

    handleDeleteOption = (text) => {
        this.setState((prev) => ({options: prev.options.filter((option) => (option !== text))}))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[random]
        this.setState(() => ({isSelected: option}))
    }

    handleClearIsSelected = () => {
        this.setState(() => ({isSelected: undefined}))
    }

    handleAddOption = (option) => {
        if (!option){
            return "Enter a value"
        }
        if (this.state.options.indexOf(option) > -1){
            return "Option already exists"
        }
        else{
            this.setState((prev) => ({options: [...prev.options, option]}))
        }
    }

    render(){
        const subtitle = "Make a computer decide your way of life"

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                <OptionModal 
                    isSelected={this.state.isSelected}
                    handleClearIsSelected={this.handleClearIsSelected}
                />
            </div>
        )
    }
}

App.defaultProps = {
    options: []
}

export default App