import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
// Temporary object that sets an example on how the data that will returned is formatted
const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};
// Creating an arrays made of of mulitple object created above
const businesses = [business, business, business, business, business, business];

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      {/* Passing down props to the BusinessList component */}
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
