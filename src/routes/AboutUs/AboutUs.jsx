import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import FancyText from '../../components/FancyText/FancyText';
import FancyLink from '../../components/FancyLink/FancyLink';
import { Link } from 'react-router-dom';

const black = '#000';

class AboutUs extends Component {
  componentWillMount () {
    if (!this.props.sponsorsError && !this.props.sponsors) {
      this.props.getSponsors();
    }
    if (!this.props.user && !this.props.authFailed) {
      this.props.checkAuthentication();
    }
  }

  render () {
    return (
      <div>
        <Header title="About Us"/>
        <Container customClasses="about-us">
          <div className="heading">
            <h2>Who is</h2>
            <h1>Hubs?</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui off-
            </p>
          </div>
        </Container>
        <Container customClasses="intro">
          <FancySeparator shadow="top"/>
          <div className="text-center">
            <FancyText customClasses="light">How does Hubs</FancyText>
            <h1>
              <FancyLink color={black}>Work?</FancyLink>
            </h1>
          </div>
          <div className="about-steps">
            <div className="step">
              <div className="img-container">
                <span className="step-1"/>
              </div>
              <div className="text">
                Create and account and
                search for a topic
                you’d like to learn
              </div>
            </div>
            <div><span className="step-separator"/></div>
            <div className="step">
              <div className="img-container">
                <span className="step-2"/>
              </div>
              <div className="text">
                Go through the lesson and
                earn points to unlock other
                lessons or programs
              </div>
            </div>
            <div><span className="step-separator"/></div>
            <div className="step">
              <div className="img-container">
                <span className="step-3"/>
              </div>
              <div className="text">
                Apply to a company
                scholarship and
                <br/>
                <strong>keep learning!</strong>
              </div>
            </div>
          </div>
        </Container>
        <Container customClasses="sponsors grey padding-sm">
          <FancySeparator shadow="bottom"/>
          <h2 className="text-center">Those are the companies that</h2>
          <h1 className="text-center">support us</h1>
          <div className="sponsor-list content">
            {
              this.props.sponsors && this.props.sponsors.map((sponsor, i) => (
                <Link key={i} to="/"><img alt={`Sponsor ${i}`} src={sponsor.logo}/></Link>
              ))
            }
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default AboutUs;
