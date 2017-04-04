import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = (props) => (
  <div className="project-card">
    <Link to="/project-details"><img className="intro-img" alt={props.project.name} src={props.project.photo}/></Link>
    <img className="category-icon" alt={props.project.category} src={`/i/category-icons/${props.project.category}.png`}/>
    <div className="project-info">
      <div className="project-details">
        <Link className="no-link" to="/project-details"><h2>{props.project.name}</h2></Link>
        <div className="grid">
          <span className="project-date">{props.project.date}</span>
          {props.showType && <span className={`project-type ${props.project.type}`}>{props.project.type}</span>}
        </div>
        <Link to="/project-details" className="footer-link">GO TO PROJECT</Link>
      </div>
      <div className="project-level">
        <span className="level-icon" style={{width: ((18 * props.project.level) + 'px')}}></span>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  showType: PropTypes.bool
};

export default ProjectCard;
