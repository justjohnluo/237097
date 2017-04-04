import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import FancyText from '../../components/FancyText/FancyText';
import FancyLink from '../../components/FancyLink/FancyLink';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Button from '../../components/Button/Button';
import Calendar from '../../components/Calendar/Calendar';
import moment from 'moment';
import Select, { Option } from 'rc-select';
import { Link } from 'react-router-dom';

const BLACK = '#000';
const MAX_VISIBLE_RECENT_PROJECTS = 4;

class LandingPage extends Component {
  componentWillMount () {
    if (!this.props.recentProjects) {
      this.props.getRecentProjects(MAX_VISIBLE_RECENT_PROJECTS);
    }
    if (!this.props.eventsError && !this.props.events) {
      this.props.getEvents();
    }
    if (!this.props.sponsorsError && !this.props.sponsors) {
      this.props.getSponsors();
    }
    if (!this.props.categoriesError && !this.props.categories) {
      this.props.getCategories();
    }
    if (!this.props.user && !this.props.authFailed) {
      this.props.checkAuthentication();
    }
  }

  render () {
    return (
      <div>
        <Header title="Home"/>
        <Container customClasses="landing-banner">
          <div className="jumbotron">
            <div className="text">
              <h2>Hubs is where</h2>
              <h1>Learning</h1>
              <h2 className="text-right">becomes fun!</h2>
              <div className="button-group">
                <Button customClasses="btn-jumbotron btn-cyan" text="I want to learn!"/>
                <Button customClasses="btn-jumbotron btn-red" text="I want to teach!"/>
                <Button customClasses="btn-jumbotron btn-green" text="I want to give!"/>
              </div>
            </div>
            <div className="flex-filler"/>
          </div>
        </Container>
        <Container customClasses="padding-md text-center">
          <FancySeparator shadow="top"/>
          <FancyText>Not sure where to start?</FancyText>
          <div className="text-padded">
            <Link to="/">
              <span className="arrow-up-icon"></span>
              <FancyLink color={BLACK}>Create you account </FancyLink>
            </Link>
            with the above links, or
            <Link to="/learning-center">
              <FancyLink color={BLACK}> check out our projects </FancyLink>
            </Link>
            and
            <Link to="/calendar">
              <FancyLink color={BLACK}> events!</FancyLink>
            </Link>
          </div>
        </Container>
        <Container customClasses="padding-sm main-content">
          <FancySeparator shadow="bottom"/>
          <div className="section-header">
            <div>
              <h3>Recent Projects</h3>
            </div>
            <Link to="/learning-center"><FancyLink customClasses="section-link">Catalog >></FancyLink></Link>
          </div>
          <div className="grid">
            {
              this.props.recentProjects && this.props.recentProjects.map((project, i) => (
                <ProjectCard key={i} project={project}/>
              ))
            }
          </div>
          <FancySeparator customClasses="style-2"/>
          <div className="section-header">
            <div>
              <h3>Events</h3>
            </div>
            <Link to="/calendar"><FancyLink customClasses="section-link">Go to calendar >></FancyLink></Link>
          </div>
          <div className="calendar">
            <Calendar events={this.props.events} currentDate={moment().format('MMMM D')}/>
          </div>
        </Container>
        <Container customClasses="dotted padding-md">
          <FancySeparator shadow="top"/>
          <h2 className="text-center">Want to keep</h2>
          <h1 className="text-center">Learning?</h1>
          <div className="inline-form">
            <div className="col-8">
              <label>Write us your email to keep you updated!</label>
              <input className="block" type="email" placeholder="yourname_example@gmail.com"/>
            </div>
            <div className="col-4">
              <label>What is your topic of interest?</label>
              <Select className="select" showSearch={false} defaultValue="All Categories">
                {
                  this.props.categories &&
                  this.props.categories.map((category) => (
                    <Option value={category.title} key={category.title}>{category.title}</Option>
                  ))
                }
              </Select>
              <div className="text-right">
                <br/>
                <Button customClasses="btn-rounded btn-white" text="Subscribe"/>
              </div>
            </div>
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

export default LandingPage;
