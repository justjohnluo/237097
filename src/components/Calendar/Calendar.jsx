import React, { PropTypes, Component } from 'react';
import FullCalendar from 'rc-calendar/lib/FullCalendar';
import Button from '../Button/Button';
import Select from 'rc-select';
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';
import 'rc-calendar/assets/index.css';
import './Calendar.css';

const MAX_VISIBLE_EVENTS = {
  sidebar: 10,
  calendar: 2
};

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      showHelp: false
    };
  }
  render() {
    return (
      <div className="calendar-container">
        {
          !this.props.hideSidebar &&
          <div className="calendar-sidebar">
            <div className="sidebar-list">
              {
                this.props.events &&
                this.props.events.slice(0,MAX_VISIBLE_EVENTS.sidebar).map((event, i) => (
                  <div key={i} className="event-card">
                    <span className="pin"></span>
                    <span className={`event-icon event-${event.type}`}></span>
                    <span className="event-details">
                      <span className="title">{event.name}</span>
                      <span>{moment(event.date, 'MMMM-D-YYYY').format('MMMM, D YYYY')}</span>
                      <span>From {event.from} to {event.to}</span>
                    </span>
                  </div>
                ))
              }
            </div>
            <Link to="/calendar">
              <Button
                text="Load more events"
                customClasses="btn-rounded btn-white btn-centered"
                clickAction={()=>{}}/>
            </Link>
          </div>
        }
        <div className={`fancy-calendar-parent ${this.props.hideSidebar ? 'fullscreen' : ''}`}>
          <span className="calendar-bg"></span>
          <div className="custom-header">
            <span className="prev"></span>
          <h1>{this.props.currentDate}</h1>
            <span className="next"></span>
          </div>
          <FullCalendar
            className="fancy-calendar"
            Select={Select}
            fullscreen
            dateCellContentRender={(date) => {
              return (
                <span className="date-content">
                  <span className="date-number">{date.format('D')}</span>
                  <span className="event-icons">
                    {
                      _.filter(this.props.events, (event) => moment(event.date, 'MMMM-D,YYYY').diff(date, 'days') === 0)
                      .slice(0,MAX_VISIBLE_EVENTS.calendar).map((e, i) => {
                        return <span key={i}><span className={`event-${e.type}`}></span></span>
                      })
                    }
                  </span>
                </span>
              )
            }}
            type="date"/>
          <div className="help-avatar" onClick={() => this.setState({showHelp: !this.state.showHelp})}>
            {
              this.state.showHelp &&
              <div className="help-message">
                <p>
                  <span className="title">HEY THERE!</span>
                  Need help with something?
                  <br/>
                  I can help out!
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  hideSidebar: PropTypes.bool,
  events: PropTypes.array,
  currentDate: PropTypes.string.isRequired
};

export default Calendar;
