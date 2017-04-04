import React, { PropTypes } from 'react';
import './FancyList.css';

const FancyList = (props) => (
  <ul className="fancy-list">
    {
      props.items.map((item, i) => (
        <li key={i}>
          <span className="bullet">{i + 1}</span>
          <span className="inner-text">{item}></span>
        </li>
      ))
    }
  </ul>
);

FancyList.propTypes = {
  items: PropTypes.array.isRequired
};

export default FancyList;
