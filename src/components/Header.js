import { useState } from "react";
import { LOGO_URL } from "../utils/static";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div>
                <img className="w-36" src={LOGO_URL} alt="comp-logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-3">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-3">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-3">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-3">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-3">Cart</li>
                    <button
                        className="px-3"
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
        </div>
    );
};

export default Header;
