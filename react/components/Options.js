import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        <ol>
            {
                props.options.map((option, index) => (
                    <Option key={index} text={option} handleDeleteOption={props.handleDeleteOption}/>
                ))
            }
        </ol>
    </div>
)

export default Options