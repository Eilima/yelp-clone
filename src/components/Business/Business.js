import React from "react";
// import { render } from "@testing-library/react";
import "./Business.css";

//Is passed down the element of the array 'businesses' which is made up of objects
class Business extends React.Component {
  render() {
    //Assigning props to the bussiness variable.
    //Props is an object
    const { business } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          {/* Will display image of business object */}
          <img src={business.imageSrc} alt="" />
        </div>
        {/* Displays the business name */}
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            {/* Displays the business address */}
            <p>{business.address}</p>
            {/* Displays the business city */}
            <p>{business.city}</p>
            {/* Displays the business state and zipcode */}
            <p>{business.state + " " + business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            {/* Displays the business category */}
            <h3>{business.category}</h3>
            {/* Displays the business rating */}
            <h3 className="rating">{business.rating}</h3>
            {/* Displays the business review count */}
            <p>{business.reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
