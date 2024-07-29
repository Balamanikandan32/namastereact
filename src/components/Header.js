import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utility/constants";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../Utility/useOnlineStatus";
import UserContext from "../Utility/UserContext";

const Header = () => {
  const [logInOut, setLogInOut] = useState("Login");
  const onlineStatus = useOnlineStatus()
  const context = useContext(UserContext)

  return (
    <div className="header flex justify-between bg-purple-200">
      <div className="logo-container w-16 m-3">
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-3 m-3">
          <li className="px-3">Online Status : {onlineStatus ? '🟢' : '🔴'}</li>  {/* here we are not using key attribute beacuse the list in static we can use key attribute for dynamic(ike map over element , etc.,)  */}
          <li className="px-3"><Link to ="/">Home</Link></li>
          <li className="px-3"><Link to = "/about">About Us</Link></li>
          <li className="px-3"><Link to = "/contact">Contact Us</Link></li>
          <li className="px-3"><Link to = "/grocery">Grocery</Link></li>
          <li className="px-3">Cart</li>
          <div className="loginout-container">
            <button
              className="loginout-btn px-3 bg-blue-300 border border-black rounded-lg"
              onClick={() => {
                logInOut === "Login"
                  ? setLogInOut("Logout")
                  : setLogInOut("Login");
              }}
            >
              {logInOut}
            </button>
          </div>
          <li className="px-3">{context?.loggiedInUser}</li>
          {/* for class component we can achive it by using below however for nested context it very difficult to consume context so that we use usehook  */}
          {/* <UserContext.Consumer >
            {
              (data) => <h1>{data?.context?.loggiedInUser}</h1>
            }
          </UserContext.Consumer> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
