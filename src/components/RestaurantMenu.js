import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItem from "./RestaurantItem";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);        //to fetch data using custom hooks

    const [showIndex, setShowIndex] = useState(0);

    // useEffect(() => {         //to fetch data using useEffect and fetch function
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_URL + resId);
    //     const json = await data.json();
    //     setResInfo(json.data);
    // };

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards?.[0]?.card?.card?.info;
    const categories =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
            1,
            -2
        );

    return (
        <div className="menu">
            <h1 className="text-center font-bold my-4 text-2xl">{name}</h1>
            <p className="text-center font-bold text-lg mb-4 text-slate-400">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <ul className="text-center mx-auto">
                {categories.map((cat, index) => (
                    <RestaurantCategory cat={cat} index={index} showItems={index===showIndex?true:false} setShowIndex={()=>setShowIndex(index)} />
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;
