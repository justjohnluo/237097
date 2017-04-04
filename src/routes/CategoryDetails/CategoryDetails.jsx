import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Button from '../../components/Button/Button';
import Select, { Option } from 'rc-select';
import { Link } from 'react-router-dom';
import { find } from 'lodash';

const PROJECTS_PER_ROW = 4;
const START_PROJECTS_LIMIT = 12;
const DEFAULT_PROJECT_TYPE = 'lesson';
const VALID_CATEGORIES = [
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

let selectedCategoryName;
let selectedCategory;

class CategoryDetails extends Component {
  constructor() {
    super();
    this.loadData = this.loadData.bind(this);
  }

  componentWillMount () {
    this.loadData();
  }

  componentWillReceiveProps () {
    this.loadData();
  }

  loadData () {
    // If there is no category param in the route set science as default
    selectedCategoryName = find(VALID_CATEGORIES, (c) => c === this.props.routeParams.category.toLowerCase()) || 'science';
    if (!this.props.user && !this.props.authFailed) {
      this.props.checkAuthentication();
    }
    if (!this.props.categoriesError && !this.props.categories) {
      this.props.getCategories();
    }
    selectedCategory = this.props.categories ?
        find(this.props.categories, (c) => c.title.toLowerCase() === selectedCategoryName)
      : null;
    if (!selectedCategory && this.props.categories) {
      selectedCategory = this.props.categories[0];
    }
    if (!this.props.categoryProjects || this.props.categoryProjects.category !== selectedCategoryName) {
      this.props.getCategoryProjects(selectedCategoryName, START_PROJECTS_LIMIT, DEFAULT_PROJECT_TYPE);
    }
  }

  render () {
    return (
      <div>
        <Header title="Learning Center"/>
        <Container
          customClasses="category-details padding-md"
          customColor={selectedCategory ? selectedCategory.base_color : ''}
          customTextColor="#fff">
          <h2 className="text-center">Category</h2>
          <h1 className="text-center">{selectedCategory ? selectedCategory.title : ''}</h1>
        </Container>
        <Container customClasses="padding-xs">
          <FancySeparator shadow="top"/>
          <div className="section-header">
            <div>
              <h3>Showing {this.props.categoryProjects && this.props.categoryProjects.projects.length} results</h3>
            </div>
            <div className="text-right">
              Sort by
              <Select className="select select-inline" showSearch={false} defaultValue="Date">
                <Option value="date">Date</Option>
                <Option value="level">Level</Option>
                <Option value="name-a-z">Name A-Z</Option>
              </Select>
              <Link className="hide-link" to="#">Filters</Link>
            </div>
          </div>
        </Container>
        <Container customClasses="padding-sm main-content">
          <FancySeparator shadow="bottom"/>
          <div className="grid">
            {
              this.props.categoryProjects && this.props.categoryProjects.category === selectedCategoryName &&
              this.props.categoryProjects.projects.map((project, i) => (
                <ProjectCard key={i} project={project}/>
              ))
            }
          </div>
          <div className="text-center">
            <br/>
            <Button
              customClasses="btn-rounded btn-white"
              text="Load more projects"
              clickAction={() =>
                this.props.getCategoryProjects(selectedCategoryName, this.props.categoryProjects.projects.length + PROJECTS_PER_ROW)
              }/>
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default CategoryDetails;
