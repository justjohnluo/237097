import React from 'react';
import { Link } from 'react-router-dom';
import './StudentCard.css';

const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const StudentCard = (props) => (
  <div className="student-card">
    <Link to="/profile"><img className="intro-img" alt={props.student.name} src={props.student.photo}/></Link>
  <span className="member-points"><span/>{numberWithCommas(props.student.points)}</span>
    <div className="student-info">
      <div className="student-details">
        <Link className="no-link" to="/profile"><h2>{props.student.name}</h2></Link>
        <span className={`student-level ${props.student.level.toLowerCase().split(' ').join('-')}`}>{props.student.level}</span>
        <hr/>
        <span className="student-date">{props.student.date}</span>
      <span className="student-interests">Interested in: {props.student.interested_in.join(', ')}</span>
        <div className="footer-links">
          <Link to="/profile">VIEW DETAILS</Link>
          <Link to="#">NOTIFY INTEREST</Link>
        </div>
      </div>
    </div>
  </div>
);

export default StudentCard;
