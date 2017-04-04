import React, { PropTypes } from 'react';
import './Modal.css';

const Modal = (props) => (
  <div className={`modal-container ${props.customClasses || ''}`}>
    <div className="modal-backdrop" onClick={props.dismiss}/>
    <div className="modal-body content">
      <span className="modal-dismiss" onClick={props.dismiss}></span>
      {props.children}
    </div>
  </div>
);

Modal.propTypes = {
  customClasses: PropTypes.string,
  dismiss: PropTypes.func.isRequired
};

export default Modal;
