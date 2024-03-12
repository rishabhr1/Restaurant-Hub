import { useState } from "react";
import { LOGO_URL } from "../utils/static";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("login");

    const onlineStatus=useOnlineStatus();

    return (
        <div id="header">
            <div id="image">
                <img src={LOGO_URL} alt="comp-logo" />
            </div>
            <ul>
                <li>
                    Online Status: {onlineStatus ? "🟢" : "🔴"}
                </li>
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
