import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import Calendar from '../../components/Calendar/Calendar';
import moment from 'moment';
import { Link } from 'react-router-dom';

class CalendarPage extends Component {
  componentWillMount () {
    if (!this.props.eventsError && !this.props.events) {
      this.props.getEvents();
    }
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
        <Header title="Events"/>
        <Container customClasses="padding-sm main-content">
          <div className="section-header">
            <div>
              <h3>Events</h3>
            </div>
          </div>
          <div className="calendar">
            <Calendar hideSidebar events={this.props.events} currentDate={moment().format('MMMM D')}/>
          </div>
        </Container>
        <Container customClasses="sponsors">
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

export default CalendarPage;
