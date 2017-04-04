import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ScholarshipCard from '../../components/ScholarshipCard/ScholarshipCard';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import './Profile.css';

const COMPLETED_LESSONS_LIMIT = 3;
const SUGGESTED_LESSONS_LIMIT = 3;

class Profile extends Component {
  constructor () {
    super();
    this.state = {
      query: '',
      filters: {
        CATEGORIES: [],
        LEVELS: [],
        POINTS: []
      }
    };
    this.loadData = this.loadData.bind(this);
  }

  componentWillMount () {
    this.loadData();
  }

  componentWillReceiveProps () {
    this.loadData();
  }

  loadData () {
    if (!this.props.user && !this.props.authFailed) {
      this.props.checkAuthentication();
    }
    if (!this.props.userProjects) {
      this.props.getUserProjects(COMPLETED_LESSONS_LIMIT);
    }
    if (!this.props.suggestedProjects) {
      this.props.getSuggestedProjects(SUGGESTED_LESSONS_LIMIT);
    }
  }

  render () {
    if (this.props.authFailed) {
      console.log('should go to index');
      window.location.href = '/';
    }
    return (
      !this.props.user ? <div/> :
      <div className="profile">
        <Header title="My Profile"/>
        <Container customClasses="profile-header">
          <div className="grid">
            <div>
              <h1>{this.props.user.fullName}</h1>
              <h4>{this.props.user.address}; {this.props.user.age} years old</h4>
            </div>
            <div>
              <h3>You've grown a</h3>
              <h2>{this.props.user.total_progress}%</h2>
            </div>
          </div>
        </Container>
        <Container customClasses="padding-xs">
          <FancySeparator shadow="top"/>
          <div className="member-stats">
            <img alt={this.props.user.fullName} src={this.props.user.photoURL} className="profile-image"/>
            <div>
              <label>Points</label>
              <span><span className="level-icon" style={{ width: '18px' }}/>{this.props.user.points}</span>
            </div>
            <div>
              <label>Level</label>
              <span className={this.props.user.level.toLowerCase().split(' ').join('-')}>{this.props.user.level}</span>
            </div>
            <div>
              <label>Medals</label>
              <div className="medals">
                {this.props.user.medals.map((medal, i) => <span key={i} className={`medal ${medal}`}/>)}
              </div>
            </div>
          </div>
        </Container>
        <Container customClasses="padding-xs main-content">
          <FancySeparator shadow="bottom"/>
          <div className="section-header">
            <h3>About me</h3>
            <h3 className="mobile-hidden">Scholarships</h3>
          </div>
          <br/>
          <br/>
          <div className="with-sidebar">
            <div className="filter-sidebar">
              <div className="filter-group">
                <label>MY BIO</label>
                <p>{this.props.user.about.bio}</p>
              </div>
              <div className="filter-group">
                <label>MY INTERESTS ARE</label>
                <ul className="interests-list">
                  {
                    this.props.user.about.interests.map((interest, i) => (
                      <li key={i}><img alt={interest} src={`/i/category-icons/${interest}.png`}/> {interest}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="filter-group">
                <label>THIS MONTH {this.props.user.first_name.toUpperCase()}:</label>
                <ul className="monthly-achievements-list">
                  {
                    this.props.user.about.monthly_achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))
                  }
                </ul>
              </div>
              <Button
                customClasses="btn-rounded btn-white block"
                text="Offer scholarship"/>
            </div>
            <div className="section-header mobile-only">
              <h3>Scholarships</h3>
            </div>
            <div className="column-grid">
              <div className="grid">
                <div className="cards">
                  {
                    this.props.user.scholarships.map((scholarship, i) => (
                      <ScholarshipCard key={i} scholarship={scholarship}/>
                    ))
                  }
                </div>
              </div>
              <div className="section-header">
                <h3>{this.props.user.completed_lessons} lessons completed</h3>
                <Link className="text-right" to="/learning-center">Show all lessons</Link>
              </div>
              <div className="grid">
                <div className="cards">
                  {
                    this.props.userProjects &&
                    this.props.userProjects.map((project, i) => (
                      <ProjectCard key={i} project={project} showType/>
                    ))
                  }
                </div>
              </div>
              <div className="section-header">
                <h3>Lessons you might like</h3>
              </div>
              <div className="grid">
                <div className="cards">
                  {
                    this.props.suggestedProjects &&
                    this.props.suggestedProjects.map((project, i) => (
                      <ProjectCard key={i} project={project} showType/>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Profile;
