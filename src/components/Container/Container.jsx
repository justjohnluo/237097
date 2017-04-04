import React, { PropTypes } from 'react';
import './Container.css';

const Container = (props) => (
  <div
    className={`container ${props.customClasses || ''}`}
    style={{ backgroundColor: props.customColor || '', color: props.customTextColor || ''}}>
    <div className="content">
      {props.children}
    </div>
  </div>
);

Container.propTypes = {
  customClasses: PropTypes.string,
  customColor: PropTypes.string,
  customTextColor: PropTypes.string
};

export default Container;
