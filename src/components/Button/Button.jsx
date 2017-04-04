import React, { PropTypes } from 'react';
import './Button.css';

const Button = (props) => (
  <button
    className={`btn ${props.customClasses}`}
    onClick={props.clickAction}>
    {props.text}
  </button>
);

Button.propTypes = {
  customClasses: PropTypes.string,
  clickAction: PropTypes.func,
  text: PropTypes.string
};

export default Button;
