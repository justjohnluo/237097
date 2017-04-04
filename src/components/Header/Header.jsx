import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import './Header.css';

const Header = (props) => {
  const renderUser = () => (
    <span className="user-info">
      <span className="notifications-icon"></span>
      <span className="user-points">
        <i/> {props.user.points}
      </span>
      <Link to="/profile">
        <img alt={props.user.fullName} src={props.user.photoURL}/>
        <span className="greeting">
          <span className="text-cyan">Hello</span>
          <span>{props.user.fullName}</span>
        </span>
      </Link>
    </span>
  );

  return (
    <header className="header">
      { props.showMenu && <Menu dismiss={props.toggleMenu}/> }
      {
        props.showLogin &&
        <Modal customClasses="modal-sm" dismiss={props.toggleLoginModal}>
          <LoginForm login={props.login} error={props.loginError}/>
        </Modal>
      }
      <nav className="content">
        <div className="left-panel">
          <span className="toggle-menu" onClick={props.toggleMenu}></span>
        </div>
        <div className="center-panel">
          <Link to="/">
            <span className="logo"></span>
          </Link>
          {
            props.title &&
            <h1>{props.title}</h1>
          }
        </div>
        <div className="right-panel">
          <span className="search-icon"></span>
          {
            props.user && renderUser()
          }
          <Button
            text={`Log ${props.user ? 'out' : 'in'}`}
            customClasses="btn-header"
            clickAction={() => {if (props.user) props.logout(); else props.toggleLoginModal();}}/>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  showMenu: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  toggleLoginModal: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  title: PropTypes.string
};

export default Header;
