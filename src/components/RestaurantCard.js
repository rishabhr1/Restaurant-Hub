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
export default RestaurantCard;
