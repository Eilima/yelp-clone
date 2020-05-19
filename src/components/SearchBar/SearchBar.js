import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  getSortByClass() {
    if (this.state.sortBy === this.sortByOptions.sortBy) return "active";
    else return "";
  }
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }
  renderSortByOptions() {
    //obtain the object key values of the following
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li key="sortByOptionValue">{sortByOption}</li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions}</ul>
        </div>
        <div className="SearchBar-fields">
          {/* Creates input fields to search for businesses and a location */}
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
