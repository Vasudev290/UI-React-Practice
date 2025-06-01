import { useState } from "react";
import { LOGO_URL } from "../utils/ConstantData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatues";
const Header = () => {
  //let btnName = "Login";
  // const [btnNameReact, setBtnNameReact] = useState("Login");
  const [btnNameReact, setBtnNameReact] = useState(true);
  const online = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-xl">
          <li className="px-4">Online Status: {online ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
            className="px-6 py-2 cursor-pointer bg-gray-100 rounded-md transition-transform hover:scale-105"
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
