import { useState } from "react";
import { Link,NavLink} from "react-router-dom";
const Header = () =>{
  const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
      <div className="navBar">
        <div className="navLogo">
          <h3>Foodly</h3>
        </div>
        <div className="navItems">
          <ul>
            <li><NavLink to="/" className="navLinks">Home</NavLink></li>
            <li><NavLink to="/about" className="navLinks">About</NavLink></li>
            <li><NavLink to="/contact" className="navLinks">Contact Us</NavLink></li>
            <li><NavLink className="navLinks">Cart</NavLink></li>
            <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;