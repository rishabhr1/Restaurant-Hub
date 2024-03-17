import { useState } from "react";
import RestaurantItem from "./RestaurantItem.js";
import RestaurantSubCategory from "./RestaurantSubCategory";

const RestaurantCategory = (props) => {
    const {cat, index, showItems, setShowIndex}=props;

    const [showSubCategory, setShowSubCategory] = useState(0);
    
    const handleClick = () => {
        setShowIndex();
    }

    return (
        <li className="w-8/12 text-center mx-auto py-2" key={index}>
            <div className="flex justify-between p-2 shadow-lg bg-blue-100 cursor-pointer"  onClick={handleClick}>
                <span className=" font-bold">{cat.card.card.title} ({cat?.card?.card?.itemCards?.length > 0 ? cat?.card?.card?.itemCards?.length:cat?.card?.card?.categories?.length})</span>
                <span>🔽</span>
            </div>
            {cat?.card?.card?.itemCards?.length > 0 && (
                <ul className="px-4">
                    {showItems&&cat?.card?.card?.itemCards?.map((item) => (
                        <RestaurantItem item={item} />
                    ))}
                </ul>
            )}
            {cat?.card?.card?.categories?.length > 0 && (
                <ul>
                    {showItems && cat.card.card.categories.map((food, index) => (
                        <RestaurantSubCategory food={food} index={index} showSub={index===showSubCategory?true:false} setShowSubCategory={()=>setShowSubCategory(index)} />
                    ))}
                </ul>
            )}
        </li>
    );
};

export default RestaurantCategory;
