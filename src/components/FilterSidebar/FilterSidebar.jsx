import React, { PropTypes, Component } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import './FilterSidebar.css';

class FilterSidebar extends Component {
  constructor () {
    super();
    this.state = {
      appliedFilters: {}
    };
    this.selectOption = this.selectOption.bind(this);
  }

  componentWillReceiveProps () {
    this.setState({ appliedFilters: this.props.appliedFilters });
  }

  componentWillMount () {
    this.setState({ appliedFilters: this.props.appliedFilters });
  }

  selectOption (group, option) {
    const appliedFilters = this.state.appliedFilters;
    const index = appliedFilters[group].indexOf(option);
    if (index > -1) appliedFilters[group].splice(index, 1);
    else appliedFilters[group].push(option);
    this.setState({ appliedFilters });
  }

  render () {
    const _self = this;
    return (
      <div className="filter-sidebar">
        <div className="filter-group mobile-only">
          <h2>Advanced</h2>
          <h1>search</h1>
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Search"
            value={this.props.query}
            onChange={(e) => this.props.onApply(null, e.target.value)}
            className="search"/>
          <span className="search-icon-grey"/>
        </div>
        {
          this.props.filterGroups.map((group, i) => (
            <div className="filter-group" key={i}>
              <label>{group.title}</label>
              <div className="checkbox-list">
                {
                  group.options.map((option, j) => (
                    <Checkbox
                      key={j} text={option}
                      levelIcon={option.value || false}
                      clickAction={() => _self.selectOption(group.model, option.value || option)}
                      isActive={_self.state.appliedFilters[group.model] && _self.state.appliedFilters[group.model].indexOf(option.value || option) > -1}/>
                  ))
                }
              </div>
            </div>
          ))
        }
        <div className="text-center">
          <Button
            customClasses="btn-rounded btn-white"
            text="Apply filters"
            clickAction={() => this.props.onApply(this.state.appliedFilters)}/>
        </div>
      </div>
    );
  }
}

FilterSidebar.propTypes = {
  query: PropTypes.string,
  filterGroups: PropTypes.array.isRequired,
  onApply: PropTypes.func.isRequired,
  appliedFilters: PropTypes.object.isRequired
}

export default FilterSidebar;
