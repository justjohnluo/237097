import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './ScholarshipCard.css';

const ScholarshipCard = (props) => (
  <div className="scholarship-card">
    <div className="scholarship-info">
      <img className="category-icon" alt={props.scholarship.category} src={`/i/category-icons/${props.scholarship.category}.png`}/>
      <div className="scholarship-details">
        <Link className="no-link" to="#"><h2>{props.scholarship.title}</h2></Link>
        <span className="scholarship-date">At: {props.scholarship.company}</span>
        <span className="scholarship-date">Start: {props.scholarship.start} End: {props.scholarship.end}</span>
        <br/>
        <Link to="#">VIEW ASSIGNMENTS</Link>
      </div>
    </div>
  </div>
);

ScholarshipCard.propTypes = {
  scholarship: PropTypes.object.isRequired
};

export default ScholarshipCard;
