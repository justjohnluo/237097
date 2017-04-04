import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import Button from '../../components/Button/Button';
import './ContactUs.css';

class ContactUs extends Component {
  componentWillMount () {
    if (!this.props.user && !this.props.authFailed) {
      this.props.checkAuthentication();
    }
  }

  render () {
    return (
      <div className="contact-us">
        <Header title="Contact Us"/>
        <Container
          customClasses="contact-us padding-md"
          customTextColor="#fff">
          <h2 className="text-center">Want to</h2>
          <h1 className="text-center">contact us?</h1>
          <div className="contact-details">
            <span>
              <span className="mail-icon"></span>
              <strong>Email us:</strong> <a href="mailto:contactus@hugs.com">contactus@hugs.com</a>
            </span>
            <span>
              <span className="phone-icon"></span>
              <strong>Call us:</strong> <a href="tel:+89 8249 8429">+89 8249 8429</a>
            </span>
          </div>
          <div className="text-separator">
            <span>Or</span>
          </div>
          <div className="text-center">
            <strong>Message us</strong>
          </div>
          <div className="contact-form mobile-hidden">
            <div className="contact-input email">
              <span className="contact-email-icon"/>
              <input type="email" placeholder="Your email"/>
            </div>
            <div className="contact-input message">
              <span className="contact-message-icon"/>
              <input type="text" placeholder="Write your message here"/>
            </div>
            <div className="text-center">
              <Button customClasses="btn-rounded btn-white" text="Send message"/>
            </div>
          </div>
        </Container>
        <Container customClasses="padding-xs">
          <FancySeparator shadow="top"/>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default ContactUs;
