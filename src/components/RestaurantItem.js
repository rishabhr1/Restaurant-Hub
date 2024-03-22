import { useDispatch } from "react-redux";
import { MENU_ITEM_URL } from "../utils/static";
import { addItem } from "../utils/cartSlice";

const RestaurantItem = (props) => {
    const { item } = props;
    console.log(item);

    const dispatch=useDispatch();
    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));         //whatever we pass as parameter to addItem will go to reducer function in the slice(here cartSlice) and that too inside the payload
    }
    
    return (
        <li className="px-4 flex justify-between py-4 text-left border-b-2" key={parseInt(item.card.info.id)}>
            <div className="w-9/12">
                <span className="font-bold">{item.card.info.name}</span>
                <br />
                <span>₹ {item.card.info.price / 100}</span>
                <p className="text-slate-400 font-thin text-xs">{item.card.info.description}</p>
            </div>

            <div>
                <div className="absolute">
                    <button className="px-2 py-1 bg-black text-white rounded-lg shadow-lg mx-5 my-20"
                    onClick={()=>handleAddItem(item)}>
                    Add +</button>
                </div>
                <img className="w-[100px] h-[100px] rounded-md" src={MENU_ITEM_URL + item.card.info.imageId} alt="" />
            </div>
        </li>
    );
};

export default RestaurantItem;
