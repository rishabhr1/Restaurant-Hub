import { CDN_URL } from "../utils/static";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
        resData.info;
    return (
        <div className="m-4 p-4 w-[200px] h-[450px] rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-200 ">
            <img
                className="rounded-lg"
                src={CDN_URL + cloudinaryImageId}
                alt="res-logo"
            />
            <h3 className="font-bold py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
        </div>
    );
};

//Higher Order Component
export const withDiscount = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white mx-6 my-2 rounded-sm px-2">{props.resData.info.aggregatedDiscountInfoV3.header}</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
};

export default RestaurantCard;
