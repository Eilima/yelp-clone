import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };
  state = {
    term: "",
    location: "",
    sortBy: "best_match",
  };

  getSortByClass = (sortByOption) => {
    if (this.state.sortBy === sortByOption) {
      return "active";
    }
    return "";
  };

  handleSortByChange = (sortByOption) => {
    this.setState({
      sortBy: this.sortByOption,
    });
  };

  handleTermChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  handleSearch = (e) => {
    // Calling search function in Yelp with parameters
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    e.preventDefault();
  };

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <form>
          <div className="SearchBar-fields">
            <input
              placeholder="Search Businesses"
              onChange={this.handleTermChange}
            />
            <input placeholder="Where?" onChange={this.handleLocationChange} />
          </div>
          <div className="div-button">
            <button className="SearchBar-button" onClick={this.handleSearch}>
              Let's Go
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
