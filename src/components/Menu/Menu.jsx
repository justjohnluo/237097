import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

// TODO: Use correct navigation links
const menuItems = [
  {
    title: 'About us',
    description: 'Know more in our',
    linkTo: '/about-us'
  },
  {
    title: 'Project gallery',
    description: 'Find projects and events in our',
    linkTo: '/'
  },
  {
    title: 'Learning Center',
    description: 'Check our catalog at the',
    linkTo: '/learning-center'
  },
  {
    title: 'Incubation Center',
    description: 'Get yourself known at the',
    linkTo: '/incubation-center'
  },
  {
    title: 'Experience Center',
    description: 'Live interactive experiences at the',
    linkTo: '/experience-center'
  },
  {
    title: 'Contact us',
    description: 'Want to reach us?',
    linkTo: '/contact-us'
  }
];

const Menu = (props) => (
  <div className="sidebar-menu">
    <span className="backdrop" onClick={props.dismiss}/>
    <aside>
      <span className="close-menu" onClick={props.dismiss}></span>
      <h1>What you can find here</h1>
      <ul>
        {
          menuItems.map((item) => (
            <li key={item.title}>
              <Link to={item.linkTo} onClick={props.dismiss}>
                <span className="item-description">{item.description}</span>
                <span className="item-title">{item.title}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </aside>
  </div>
);

Menu.propTypes = {
  dismiss: PropTypes.func.isRequired
};

export default Menu;
