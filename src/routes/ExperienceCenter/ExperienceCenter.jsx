import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Button from '../../components/Button/Button';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import Select, { Option } from 'rc-select';
import './ExperienceCenter.css';

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
  {
    value: 1
  },
  {
    value: 2
  },
  {
    value: 3
  }
];
const PROJECT_CATEGORIES = [
  {
    "title": "Lessons",
    "base_color": "#a700fa",
    "lessons": 90
  },
  {
    "title": "interactive",
    "base_color": "#ff5722",
    "lessons": 90
  },
  {
    "title": "Museum",
    "base_color": "#00c853",
    "lessons": 90
  },
];

class ExperienceCenter extends Component {
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
    if (!this.props.experienceCenterProjects) {
      this.props.getProjects(START_CARDS_LIMIT);
    }
  }

  loadMore () {
    this.props.getProjects(this.props.experienceCenterProjects.length + CARDS_PER_ROW);
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

  render () {
    return (
      <div className="experience-center">
        <Header title="Experience Center"/>
        <Container customClasses="dotted padding-md">
          <h2 className="text-center">Welcome to the</h2>
          <h1 className="text-center">Experience center</h1>
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
          <div className="categories-container">
            <div className="categories">
              {
                PROJECT_CATEGORIES.map((category, i) => <CategoryCard key={i} category={category}/>)
              }
            </div>
          </div>
          <div className="section-header">
            <div>
              <h3>All Projects</h3>
            </div>
            <div className="text-right">
              Sort by
              <Select className="select white select-inline pull-right" showSearch={false} defaultValue="Date">
                <Option className="white" value="Date">Date</Option>
                <Option className="white" value="Category">Category</Option>
                <Option className="white" value="Level">Level</Option>
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
                  title: 'CATEGORIES',
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
                {
                  this.props.experienceCenterProjects &&
                  this.props.experienceCenterProjects.map((project, i) => (
                    <ProjectCard key={i} project={project} showType/>
                  ))
                }
              </div>
              <div className="text-center">
              <br/>
              <Button
                customClasses="btn-rounded btn-white"
                text="Load more projects"
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

export default ExperienceCenter;
