import { LOGO_URL } from "../Utility/constants";
import { useState } from "react";

const Header = () => {
  const [logInOut, setLogInOut] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <div className="loginout-container">
            <button
              className="loginout-btn"
              onClick={() => {
                logInOut === "Login"
                  ? setLogInOut("Logout")
                  : setLogInOut("Login");
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
