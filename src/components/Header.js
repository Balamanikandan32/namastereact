import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utility/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [logInOut, setLogInOut] = useState("Login");


  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to = "/about">About Us</Link></li>
          <li><Link to = "/contact">Contact Us</Link></li>
          <li>Cart</li>
          <div className="loginout-container">
            <button
              className="loginout-btn"
              onClick={() => {
                logInOut === "Login"
                  ? setLogInOut("Logout")
                  : setLogInOut("Login");
                setvalue(value+1)
              }}
            >
              {logInOut}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
