import React from "react";
import ReactDOM from "react-dom/client";
//Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2jtGFtERh6dI5DQPdKxip1Lf-NmnxuPPzA&s"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//One way of writing props
// const RestoCard = ({resName, cuisine, rating, deliveryTime})=> {
//       <h4>{cuisine}</h4>
//       <h3>{resName}</h3>
//       <h5>{rating}</h5>
//       <h5>{deliveryTime}</h5>
// }

//second way of writing props
// const RestoCard = (props)=> {
//       <h4>{props.cuisine}</h4>
//       <h3>{props.resName}</h3>
//       <h5>{props.rating}</h5>
//       <h5>{props.deliveryTime}</h5>
// }

//third way of writing props
//RestoCard Component
const RestoCard = (props) => {
  const { resName, cuisine, rating, deliveryTime } = props;
  return (
    <div className="resto-container">
      <img
        className="res-logo"
        style={{ backgroundColor: "lightcyan" }}
        alt="resto-container"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lln3zxpll8pshaeqrgr9"
      />
      <h4>{cuisine}</h4>
      <h3>{resName}</h3>
      <h5>{rating}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

//Body
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="rest-container">
        <RestoCard
          resName="Meghana Foods"
          cuisine="Biriyani, Sounth Indian, Indian"
          rating="4.5 ⭐"
          deliveryTime="38min Delivery"
        />
        <RestoCard
          resName="Biriyani Zone"
          cuisine="Biriyani, North Indian, Indian"
          rating="4.4 ⭐"
          deliveryTime="44min Delivery"
        />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
