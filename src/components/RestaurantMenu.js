import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/static";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    };
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
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h3>Menu</h3>
            <ul>
                {categories.map((cat, index) => (
                    <li key={index}>
                        {cat.card.card.title}
                        {cat?.card?.card?.itemCards?.length > 0 && (
                            <ul>
                                {cat?.card?.card?.itemCards?.map((item) => (
                                    <li key={parseInt(item.card.info.id)}>
                                        {item.card.info.name} -{" "}
                                        {item.card.info.price / 100}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {cat?.card?.card?.categories?.length > 0 && (
                            <ul>
                                {cat.card.card.categories.map((food, index) => (
                                    <li key={index}>
                                        {food.title}
                                        <ul>
                                            {food.itemCards.map((i) => (
                                                <li
                                                    key={parseInt(
                                                        i.card.info.id
                                                    )}
                                                >
                                                    {i.card.info.name} -{" "}
                                                    {i.card.info.price / 100}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantMenu;
