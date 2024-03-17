import { useState } from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantSubCategory = (props) => {
    const {food, index, showSub, setShowSubCategory}=props;

    const handleClick = () => {
        setShowSubCategory();
    }

    return (
        <li key={index}>
            <div className="flex justify-between text-left  px-2 border-b-2 border-slate-300 shadow-lg bg-blue-100 cursor-pointer" onClick={handleClick}>
                <span>{food.title} ({food.itemCards.length})</span>
                <span>🔽</span>
            </div>
            <ul className="px-4">
                {showSub&&food.itemCards.map((i) => (
                    <RestaurantItem item={i}/>
                ))}
            </ul>
        </li>
    );
};
export default RestaurantSubCategory;
