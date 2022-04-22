import React from "react"

const Option = (props) => (
    <li>
        {props.text}
        <button onClick={(e) => {
            e.preventDefault()
            props.handleDeleteOption(props.text)
        }}>
                Remove
        </button>
    </li>
)

export default Option