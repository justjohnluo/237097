import React, { PropTypes } from 'react';
import './FancyLink.css';

const FancyLink = (props) => (
  <span className={`${props.customClasses || ''} fancy-link`} style={{color: props.color}}>
    {props.children}
  </span>
);

FancyLink.propTypes = {
  customClasses: PropTypes.string,
  color: PropTypes.string
};

export default FancyLink;
