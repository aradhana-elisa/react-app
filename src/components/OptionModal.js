import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
            isOpen= {!!props.selectedOptionprop}
            onRequestClose={props.handleClearOption}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOptionprop && <p className="modal__body">{props.selectedOptionprop}</p>}
            <button onClick={props.handleClearOption}>Okay</button>
        </Modal>
);


export default OptionModal;