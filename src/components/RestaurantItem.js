import { MENU_ITEM_URL } from "../utils/static";

const RestaurantItem = (props) => {
    const { item } = props;
    
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
                    <button className="px-2 py-1 bg-black text-white rounded-lg shadow-lg mx-5 my-20">{" "}Add+</button>
                </div>
                <img className="w-[100px] h-[100px] rounded-md" src={MENU_ITEM_URL + item.card.info.imageId} alt="" />
            </div>
        </li>
    );
};

export default RestaurantItem;
