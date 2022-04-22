import React from "react"
import Modal from "react-modal"

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.isSelected}
            contentLabel="Selected Option"
            onRequestClose={props.handleClearIsSelected}
        >
            <h3>
                Selected Option:
            </h3>
            {props.isSelected && <p>{props.isSelected}</p>}
            <button onClick={props.handleClearIsSelected}>Let's Do It!</button>
        </Modal>
    )

export default OptionModal