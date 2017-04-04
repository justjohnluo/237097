import React, { PropTypes } from 'react';
import './FancySeparator.css';

const FancySeparator = (props) => (
  <div className={`fancy-separator ${props.customClasses || ''}`}>
    <div className={`shadow ${props.shadow || ''}`}/>
  </div>
);

FancySeparator.propTypes = {
  customClasses: PropTypes.string,
  shadow: PropTypes.string
};

export default FancySeparator;
