import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business";
// Is passed down the 'Businesses' array which contains objects
export class BusinessList extends React.Component {
  // Will render the a instance of the 'Business' component for each element of the array
  render() {
    return (
      <div className="BusinessList">
        {/* Maps through each element of the passed down array and returns Business component with each element of the arrays */}
        {this.props.businesses.map((business) => {
          return <Business business={business} />;
        })}
      </div>
    );
  }
}
