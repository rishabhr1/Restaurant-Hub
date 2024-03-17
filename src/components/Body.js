import RestaurantCard, {withDiscount} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const BodyComp = () => {
    //local state variable
    // whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)
    const [listOfRest, setListOfRest] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardDiscount = withDiscount(RestaurantCard);

    //if no dependency array, then useEffect is called everytime component renders.
    //if dependency array is empty, then useEffect is called only on initial render(just once).
    //if dependency array contains elements, then useEffect is called every time any of those element's value changes.
    useEffect(() => {
        fetchData();
    }, []);

    //api calling with async and await
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true"
        );
        const json = await data.json();
        setListOfRest(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setFilteredRest(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    function filterList() {
        const filteredList = listOfRest.filter((res) => res.info.avgRating > 4);
        setListOfRest(filteredList);
    }

    const {loggedInUser, setUserName} = useContext(UserContext);

    //conditional rendering using ternary operator
    return listOfRest.length === 0 ? (
        <Shimmer />
    ) : (
        <div>
            <div className="flex">
                <div className="p-4">
                    <input
                        type="text"
                        className="px-1 border border-solid rounded-md"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className=" bg-blue-100 mx-2 px-4 rounded-md"
                        onClick={() => {
                            // filter the restaurant cards and update the UI
                            const filteredrest = listOfRest.filter((rest) =>
                                rest.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            );
                            setFilteredRest(filteredrest);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="p-4">
                    <button
                        className="px-4 mx-2 bg-gray-100 rounded-md"
                        onClick={filterList}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="p-4">
                    <label className="px-1">UserName</label>
                    <input type="text" className=" px-1 border border-solid rounded-md" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRest.map((restaurant) => (
                    <Link
                        key={parseInt(restaurant.info.id)}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        {/* if restaurant has aggregatedDiscountInfoV2 then add it's label to the restaurant */}
                        {restaurant.info.aggregatedDiscountInfoV3?.header!==undefined ? <RestaurantCardDiscount resData={restaurant}/>:
                        <RestaurantCard resData={restaurant} />}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BodyComp;
