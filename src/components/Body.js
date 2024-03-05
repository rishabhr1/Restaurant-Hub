import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const BodyComp = () => {
    //local state variable
    // whenever state variable updates, react triggers a reconciliation cycle(re-renders the component)
    const [listOfRest, setListOfRest] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const [searchText, setSearchText] = useState("");

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
        setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    function filterList() {
        const filteredList = listOfRest.filter(
            (res) => res.info.avgRating > 4
        );
        setListOfRest(filteredList);
    }
    //conditional rendering using ternary operator
    return listOfRest.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value);}} />
                    <button onClick={()=>{
                        // filter the restaurant cards and update the UI
                        const filteredrest = listOfRest.filter(rest => rest.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRest(filteredrest);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={filterList}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRest.map((restaurant) => (
                    <Link key={parseInt(restaurant.info.id)} to={"/restaurants/"+restaurant.info.id}><RestaurantCard
                        resData={restaurant}
                    /></Link>
                ))}
            </div>
        </div>
    );
};

export default BodyComp;