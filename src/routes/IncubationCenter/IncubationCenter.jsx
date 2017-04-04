import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import CampaignCard from '../../components/CampaignCard/CampaignCard';
import StudentCard from '../../components/StudentCard/StudentCard';
import Button from '../../components/Button/Button';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import Select, { Option } from 'rc-select';
import './IncubationCenter.css';

const CARDS_PER_ROW = 3;
const START_CARDS_LIMIT = 9;
const CATEGORIES = [
  'science',
  'history',
  'languages',
  'arts',
  'business',
  'industry',
  'culture',
  'dyi',
  'tech',
  'politics',
  'literature',
  'culinary'
];
const LEVELS = [
  'Sage',
  'Wise One',
  'Learner'
];
const POINTS = [
  '1,000 or more',
  '100 or more',
  '10 or more'
];

class IncubationCenter extends Component {
  constructor () {
    super();
    this.state = {
      query: '',
      filters: {
        CATEGORIES: [],
        LEVELS: [],
        POINTS: []
      },
      showAdvancedSearch: false
    };
    this.applyFilters = this.applyFilters.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.loadData = this.loadData.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.showAdvancedSearch = this.showAdvancedSearch.bind(this);
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
    if (this.props.user && this.props.user.isAdmin && !this.props.students) {
      this.props.getStudents(START_CARDS_LIMIT);
    }
    if (this.props.user && !this.props.user.isAdmin && !this.props.campaigns) {
      this.props.getCampaigns(START_CARDS_LIMIT);
    }
  }

  loadMore () {
    if (this.props.user.isAdmin) this.props.getStudents(this.props.students.length + CARDS_PER_ROW);
    else this.props.getCampaigns(this.props.campaigns.length + CARDS_PER_ROW);
  }

  applyFilters (filters, query) {
    this.setState({
      filters: filters || this.state.filters,
      query: query || '',
      showAdvancedSearch: false
    });
  }

  showAdvancedSearch () {
    this.setState({ showAdvancedSearch: true });
  }

  renderCards () {
    if ((this.props.user.isAdmin && !this.props.students)
      || (!this.props.user.isAdmin && !this.props.campaigns)) return <div/>;
    if (this.props.user.isAdmin) return (
      this.props.students.map((student, i) => (
        <StudentCard key={i} student={student}/>
      ))
    );
    return (
      this.props.campaigns.map((campaign, i) => (
        <CampaignCard key={i} campaign={campaign}/>
      ))
    );
  }

  render () {
    if (this.props.authFailed) {
      console.log('should go to index');
      window.location.href = '/';
    }
    return (
      !this.props.user ? <div/> :
      <div className="incubation-center">
        <Header title="Incubation Center"/>
        <Container customClasses="dotted padding-md">
          <h2 className="text-center">
            {this.props.user && this.props.user.isAdmin ? 'What kind of students do you want' : 'What do you want'}
            </h2>
          <h1 className="text-center">to {this.props.user && this.props.user.isAdmin ? 'recruit' : 'learn'}?</h1>
          <div className="inline-form mobile-only">
            <div className="col-8">
              <label>Search a specific topic or theme</label>
              <input className="block" type="text" placeholder="What are you searching for?"/>
            </div>
            <div className="col-4">
              <div className="text-right">
                <br/>
                <Button
                  customClasses="btn-rounded btn-white"
                  text="Advanced search"
                  clickAction={this.showAdvancedSearch}/>
                <Button
                  customClasses="btn-rounded btn-white"
                  text="Search"/>
              </div>
            </div>
          </div>
        </Container>
        <Container customClasses="padding-xs main-content">
          <FancySeparator shadow="top"/>
          <div className="section-header">
            <div>
              <h3>{this.props.user && this.props.user.isAdmin ? 'Student list' : 'Companies list'}</h3>
            </div>
            <div className="text-right">
              Sort by
              <Select className="select white select-inline pull-right" showSearch={false} defaultValue="Category">
                <Option className="white" value="Category">Category</Option>
                <Option className="white" value="Level">Level</Option>
                <Option className="white" value="Points">Points</Option>
              </Select>
            </div>
          </div>
          <br/>
          <br/>
          <div className={`with-sidebar ${this.state.showAdvancedSearch ? 'sidebar-open' : ''}`}>
            {this.state.showAdvancedSearch && <div className="mobile-only filter-backdrop"/>}
            <FilterSidebar
              query={this.state.query}
              appliedFilters={this.state.filters}
              filterGroups={[
                {
                  title: 'INTERESTED IN',
                  model: 'CATEGORIES',
                  options: CATEGORIES
                },
                {
                  title: 'LEVEL',
                  model: 'LEVELS',
                  options: LEVELS
                },
                {
                  title: 'POINTS',
                  model: 'POINTS',
                  options: POINTS
                }
              ]}
              onApply={this.applyFilters}/>
            <div className="grid">
              <div className="cards">
                {this.renderCards()}
              </div>
              <div className="text-center">
              <br/>
              <Button
                customClasses="btn-rounded btn-white"
                text={`Load more ${this.props.user && this.props.user.isAdmin ? 'students' : 'companies'}`}
                clickAction={this.loadMore}/>
              </div>
            </div>
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default IncubationCenter;
