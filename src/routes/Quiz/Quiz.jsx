import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import Modal from '../../components/Modal/Modal';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import Button from '../../components/Button/Button';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { Link } from 'react-router-dom';
import { find } from 'lodash';
import './Quiz.css';

class Quiz extends Component {
  constructor () {
    super();
    this.state = {
      showResult: false,
      questionIndex: 0,
      answers: {}
    };
    this.selectOption = this.selectOption.bind(this);
  }

  componentWillMount () {
    if (!this.props.user && !this.props.authFailed) {
      this.props.checkAuthentication();
    }
    if (!this.props.categoriesError && !this.props.categories) {
      this.props.getCategories();
    }
    if (!this.props.quizError && !this.props.quiz) {
      this.props.getQuiz();
    }
  }

  selectOption (option) {
    const answers = this.state.answers;
    answers[`answer-${this.state.questionIndex}`] = option;
    this.setState({ answers });
  }

  render () {
    const _self = this;
    let selectedCategory = (this.props.categories && this.props.quiz) ?
      find(this.props.categories, (c) => c.title.toLowerCase() === this.props.quiz.category)
      : null;

    return (!this.props.quiz || !this.props.categories) ? <div/> : (
      <div>
        <Header title="Learning Center"/>
        {
          this.state.showResult &&
          <Modal customClasses="congrats modal-md" dismiss={() => this.setState({ showResult: false })}>
            <h1>Congratulations!</h1>
            <h2>You've just:</h2>
            <div className="grid">
              <div className="earned-box">
                <span className="points-icon"/>
                <div>Earned</div>
                <div><strong>{this.props.quiz.points}</strong></div>
                <div>points</div>
              </div>
              <div className="earned-box">
                <span className="lesson-icon"/>
                <div>Unlocked</div>
                <div><strong>{this.props.quiz.lesson}</strong></div>
                <div>lesson</div>
              </div>
              <div className="earned-box">
                <span className="scholarship-icon"/>
                <div>Unlocked</div>
                <div><strong>{this.props.quiz.scholarship}</strong></div>
                <div>scholarships</div>
              </div>
            </div>
            <div className="text-center">
              <Link to="profile">
                <Button text="Ok! Great!" customClasses="btn-rounded btn-white"/>
              </Link>
            </div>
          </Modal>
        }
        <Container
          customClasses="category-details project-details padding-md"
          customColor={selectedCategory.base_color}
          customTextColor="#fff">
          <h2 className="text-center">Quiz:</h2>
          <h1 className="text-center">{this.props.quiz.name}</h1>
        </Container>
        <Container customClasses="padding-sm main-content">
          <FancySeparator shadow="top"/>
          <div className="quiz-card">
            <h1>{this.props.quiz.questions[this.state.questionIndex].title}</h1>
            <RadioGroup
              options={this.props.quiz.questions[this.state.questionIndex].options}
              onSelect={this.selectOption}
              selectedValue={this.state.answers[`answer-${this.state.questionIndex}`]}/>
            <Button
              text={(this.props.quiz.questions.length === this.state.questionIndex + 1) ? 'Finish' : 'Next question'}
              customClasses="btn-rounded btn-white btn-question"
              clickAction={() => {
                if (!_self.state.answers[`answer-${this.state.questionIndex}`] < 0) return;
                if (_self.props.quiz.questions.length === _self.state.questionIndex + 1) {
                  _self.setState({ showResult: true });
                } else {
                  _self.setState({ questionIndex: _self.state.questionIndex + 1 });
                }
              }}/>
            <div className="progress-bar">
              <span className="fill" style={{ width: (((this.state.questionIndex + 1) * 100) / this.props.quiz.questions.length) + '%' }}/>
            </div>
          </div>
          <div className="text-center sponsored-by">
            <label>This lesson is sponsored by</label>
            <Link to="#">
              <img alt="Sponsor logo" src={`/i/sponsors/${this.props.quiz.sponsor_logo_url}`}/>
            </Link>
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Quiz;
