import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.login = this.login.bind(this);
    this.socialLogin = this.socialLogin.bind(this);
    this.valueChanged = this.valueChanged.bind(this);
  }

  valueChanged(model, value) {
    let newState = {};
    newState[model] = value;
    this.setState(newState);
  }

  socialLogin() {
    // Mocked to login as normal user
    this.props.login({username: 'user', password: 'pass'});
  }

  login() {
    this.props.login(this.state);
  }

  render () {
    return (
      <div className="login-form">
        <h1 className="title">Log in</h1>
        {this.props.error && <span className="error">{this.props.error}</span>}
        <input type="text" placeholder="Username" onChange={(e) => this.valueChanged('username', e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => this.valueChanged('password', e.target.value)}/>
        <Button
          text="Log in"
          customClasses="btn-rounded btn-white"
          clickAction={this.login}/>
        <hr/>
        <div className="btn-group">
          <Button
            text="Log in with Facebook"
            customClasses="btn-fb btn-social"
            clickAction={this.socialLogin}/>
          <Button
            text="Log in with Google"
            customClasses="btn-google btn-social"
            clickAction={this.socialLogin}/>
        </div>
        <div className="foot-note">Don't have an account? <Link to="#">Sign up</Link></div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  error: PropTypes.string,
  login: PropTypes.func.isRequired
};

export default LoginForm;
