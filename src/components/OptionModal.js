import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props)=>(
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel="selected option"
    onRequestClose={props.handleCloseModal}>
    
    <h3>{props.optionData}</h3>{props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCloseModal}>close</button>
    </Modal>
)
//create a new event handle in indecison app that clears slelected opiton state
// pass that into option modal
// call it on button click
export default OptionModal