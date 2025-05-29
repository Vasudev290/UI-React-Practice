import { useState } from "react";
import { LOGO_URL } from "../utils/ConstantData";
import { Link } from "react-router-dom";
const Header = () => {
  //let btnName = "Login";
  // const [btnNameReact, setBtnNameReact] = useState("Login");
  const [btnNameReact, setBtnNameReact] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          {/* <button className="login" onClick={() => { btnName = "Logout" ,console.log(btnName) }}>{btnName}</button> */}
          {/* <button
            className="login"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button> */}
          <button
            className="login"
            onClick={() => setBtnNameReact((prev) => !prev)}
          >
            {btnNameReact ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
