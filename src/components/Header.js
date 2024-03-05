import { useState } from "react";
import { LOGO_URL } from "../utils/static";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("login");

    return (
        <div id="header">
            <div id="image">
                <img src={LOGO_URL} alt="comp-logo" />
            </div>
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
                <button
                    className="login vertical-center"
                    onClick={() => {
                        btnName === "login"
                            ? setBtnName("logout")
                            : setBtnName("login");
                    }}
                >
                    {btnName}
                </button>
            </ul>
        </div>
    );
};

export default Header;
