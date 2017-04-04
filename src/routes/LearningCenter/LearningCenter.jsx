import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import FancySeparator from '../../components/FancySeparator/FancySeparator';
import Button from '../../components/Button/Button';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Select, { Option } from 'rc-select';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  componentWillMount () {
    if (!this.props.user && !this.props.authFailed) {
      this.props.checkAuthentication();
    }
    if (!this.props.categoriesError && !this.props.categories) {
      this.props.getCategories();
    }
  }

  render () {
    return (
      <div>
        <Header title="Learning Center"/>
        <Container customClasses="dotted padding-md">
          <h2 className="text-center">What are you</h2>
          <h1 className="text-center">looking for?</h1>
          <div className="inline-form">
            <div className="col-8">
              <label>Search a specific topic or theme</label>
              <input className="block" type="text" placeholder="What are you searching for?"/>
            </div>
            <div className="col-4">
              <label>&nbsp;</label>
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
                <Link to="/search-results">
                  <Button
                    customClasses="btn-rounded btn-white"
                    text="Search"/>
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <Container customClasses="padding-sm main-content">
          <FancySeparator shadow="bottom"/>
          <br/>
          <div className="grid">
            {
              this.props.categories &&
              this.props.categories.map((category) => (
                <Link
                  className="no-link"
                  to={`category-details/${category.title.toLowerCase()}`}
                  key={category.title}>
                  <CategoryCard category={category}/>
                </Link>
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
