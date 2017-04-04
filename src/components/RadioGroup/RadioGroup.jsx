import React, { PropTypes } from 'react';
import './RadioGroup.css';

const RadioGroup = (props) => (
  <div className="radio-group">
    {
      props.options.map((option, i) => (
        <span key={i} className="option" onClick={() => props.onSelect(i)}>
          <span className={`icon ${i === props.selectedValue ? 'active' : ''}`}/>
          {option}
        </span>
      ))
    }
  </div>
);

RadioGroup.propTypes = {
  options: PropTypes.array.isRequired,
  selectedValue: PropTypes.number,
  onSelect: PropTypes.func.isRequired
};

export default RadioGroup;
