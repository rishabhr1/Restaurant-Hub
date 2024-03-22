import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/static";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("login");

    const onlineStatus = useOnlineStatus();

    const  {loggedInUser} = useContext(UserContext)

    // Selector
    // Selector is a hook inside react.js
    // Subscribing to the store using selector
    const cartItems = useSelector((store)=>store.cart.items);

    return (
        <div className="flex justify-between bg-blue-100 shadow-lg">
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
                    <li className="px-3"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
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
                    <li className="px-3 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
