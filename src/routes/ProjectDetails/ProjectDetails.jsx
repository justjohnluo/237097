import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import FancyText from '../../components/FancyText/FancyText';
import FancyList from '../../components/FancyList/FancyList';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { find } from 'lodash';
import VideoPlayer from 'react-player';
import './ProjectDetails.css';

const getProgressStatus = (progress) => {
  switch (true) {
    case (progress < 50):
      return 'Lesson started!';
    case (progress < 100):
      return 'Halfway done!';
    default:
      return 'Lesson completed!';
  }
};

class ProjectDetails extends Component {
  constructor() {
    super();
    this.state = {
      lessonFinished: false
    };
  }

  componentWillMount () {
    if (!this.props.user && !this.props.authFailed) {
      this.props.checkAuthentication();
    }
    if (!this.props.categoriesError && !this.props.categories) {
      this.props.getCategories();
    }
    if (!this.props.projectDetailsError && !this.props.projectDetails) {
      this.props.getProjectDetails();
    }
  }

  render () {
    const _self = this;
    let selectedCategory = (this.props.categories && this.props.projectDetails) ?
      find(this.props.categories, (c) => c.title.toLowerCase() === this.props.projectDetails.category)
      : null;

    return (!this.props.projectDetails || !this.props.categories) ? <div/> : (
      <div>
        <Header title="Learning Center"/>
        <Container
          customClasses="category-details project-details padding-md"
          customColor={selectedCategory.base_color}
          customTextColor="#fff">
          <h2 className="text-center">{this.props.projectDetails.intro_text}</h2>
          <h1 className="text-center">{this.props.projectDetails.headline}</h1>
          <Link
            to={this.state.lessonFinished ? '/quiz' : '#'}
            className={`btn-lesson ${this.state.lessonFinished ? 'active' : ''}`}>
            <Button text="Finish lesson" customClasses="btn-rounded btn-white"/>
          </Link>
        </Container>
        <Container customClasses="padding-xs">
          <FancySeparator shadow="top"/>
          <div className="lesson-video content-md">
            <VideoPlayer
              url={this.props.projectDetails.video}
              width="100%"
              height="calc(100% - 120px)"
              controls={true}
              onEnded={() => _self.setState({ lessonFinished: true })}
            />
            <div className="progress">
              <div className="progress-text">Your progress: <strong>{getProgressStatus(this.props.projectDetails.progress)}</strong></div>
              <div className="progress-bar">
                <span className="fill" style={{ width: this.props.projectDetails.progress + '%' }}/>
              </div>
            </div>
          </div>
        </Container>
        <Container customClasses="padding-sm main-content">
          <FancySeparator shadow="top"/>
          <div className="grid content-md instructions">
            <div className="instructions-panel">
              <FancyText>Instructions</FancyText>
              <FancyList items={this.props.projectDetails.instructions}/>
              <FancySeparator customClasses="style-3"/>
              <h1>About this lesson</h1>
              <p className="intro-text">{this.props.projectDetails.about.intro}</p>
              <p>{this.props.projectDetails.about.full_text}</p>
            </div>
            <div className="project-sidebar">
              <div>
                <h2>What you'll need</h2>
                <FancySeparator customClasses="style-4"/>
                <p>{this.props.projectDetails.requirements}</p>
              </div>
              <div>
                <h2>Really liked this topic?</h2>
                <FancySeparator customClasses="style-4"/>
                {
                  this.props.projectDetails.references.map((ref, i) => (
                    <div key={i}>
                      <p>{ref.title}</p>
                      <ul>
                        {
                          ref.links.map((link, j) => (
                            <li key={j}>
                              <Link to={link.url}>{link.text}</Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="text-center sponsored-by">
            <label>This lesson is sponsored by</label>
            <Link to="#">
              <img alt="Sponsor logo" src={`/i/sponsors/${this.props.projectDetails.sponsor_logo_url}`}/>
            </Link>
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default ProjectDetails;
