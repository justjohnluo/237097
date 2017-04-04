import React, { PropTypes } from 'react';
import './CategoryCard.css';

const CategoryCard = (props) => (
  <div className="category-card">
    <div className="img-holder" style={{ backgroundColor: props.category.base_color }}>
      <img alt={props.category.title} src={`/i/categories/${props.category.title.toLowerCase()}.png`}/>
    </div>
    <div className="category-details">
      <h2>{props.category.title}</h2>
      <div className="lesson-count">{props.category.lessons} lessons</div>
    </div>
    {
      props.category.new &&
      <span className="new-icon">
        <span className="count">{props.category.new}</span>
        <span>new</span>
      </span>
    }
  </div>
);

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired
};

export default CategoryCard;
