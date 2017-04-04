import React, { PropTypes } from 'react';
import './FancyText.css';

const FancyText = (props) => (
  <span className={`fancy-text ${props.customClasses || ''}`}>
    {props.children}
  </span>
);

FancyText.propTypes = {
  customClasses: PropTypes.string
};

export default FancyText;
