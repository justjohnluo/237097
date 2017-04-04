import React, { PropTypes } from 'react';
import './Checkbox.css';

const Checkbox = (props) => (
  <div className="checkbox" onClick={() => props.clickAction(props.model)}>
    <span className={props.isActive ? 'active' : ''}/>
  <span className="text">
    {
      props.levelIcon ? <span className="level-icon" style={{ width: (props.levelIcon * 18) + 'px' }}/> : props.text
    }
  </span>
  </div>
);

Checkbox.propsTypes = {
  clickAction: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Checkbox;
