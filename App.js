import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav Item
 * Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 *        -Img
 *        -Name of restaurant, star rating, cuisins, delivery time etc
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 * **/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s3.amazonaws.com/ionic-marketplace/food-ordering-restaurant-delivery-app/icon.png"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// We can also destructure as {resName, cuisine}
const RestaurantCard = (props) => {
  const {resName, cuisine} = props
  console.log(props);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.5</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

// const Footer = () => {
//   return(
//     <div className="footer">

//     </div>
//   )
// }
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
