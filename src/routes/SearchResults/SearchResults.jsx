import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Select, { Option } from 'rc-select';
import { Link } from 'react-router-dom';
import { find } from 'lodash';

const START_PROJECTS_LIMIT = 12;
const DEFAULT_PROJECT_TYPE = 'lesson';
const COLOR_WHITE = '#fff';

// Mock search query object
const query = {
  category: 'literature',
  text: 'Ernest Hemmingway'
};

class CategoryDetails extends Component {
  componentWillMount () {
    if (!this.props.user && !this.props.authFailed) {
      this.props.checkAuthentication();
    }
    if (!this.props.categoriesError && !this.props.categories) {
      this.props.getCategories();
    }
    if (!this.props.searchResults) {
      this.props.getSearchResults(query.category, START_PROJECTS_LIMIT, DEFAULT_PROJECT_TYPE);
    }
  }

  render () {
    let selectedCategory = this.props.categories ?
        find(this.props.categories, (c) => c.title.toLowerCase() === query.category)
      : null;
    if (!selectedCategory && this.props.categories) {
      selectedCategory = this.props.categories[0];
    }
    return (
      <div>
        <Header title="Learning Center"/>
        <Container
          customClasses="category-details padding-md"
          customColor={selectedCategory ? selectedCategory.base_color : ''}
          customTextColor={COLOR_WHITE}>
          <h2 className="text-center">Showing results for</h2>
          <h1 className="text-center">{query.text}</h1>
          <div className="text-center query-details">
            <strong>Category:</strong> {query.category}
          </div>
        </Container>
        <Container customClasses="padding-xs">
          <FancySeparator shadow="top"/>
          <div className="section-header">
            <div>
              <h3>Showing {this.props.searchResults && this.props.searchResults.projects.length} results</h3>
            </div>
            <div className="text-right">
              Sort by
              <Select className="select select-inline" showSearch={false} defaultValue="Date">
                <Option value="Date">Date</Option>
                <Option value="Level">Level</Option>
                <Option value="Name A-Z">Name A-Z</Option>
              </Select>
              <Link className="hide-link" to="#">Filters</Link>
            </div>
          </div>
        </Container>
        <Container customClasses="padding-sm main-content">
          <FancySeparator shadow="bottom"/>
          <div className="grid">
            {
              this.props.searchResults &&
              this.props.searchResults.projects.map((project, i) => (
                <ProjectCard key={i} project={project}/>
              ))
            }
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default CategoryDetails;
