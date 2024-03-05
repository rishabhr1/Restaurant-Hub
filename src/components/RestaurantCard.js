import { CDN_URL } from "../utils/static";

const stylecard = {
    backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
    const {resData}=props;
    const {name, cuisines, avgRating, cloudinaryImageId, costForTwo}=resData.info;
    return (<div className="res-card" style={stylecard}>
        <img
            className="res-logo"
            src={CDN_URL+cloudinaryImageId}
            alt="res-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating} stars</h5>
        <h5>{costForTwo}</h5>
    </div>);
};
export default RestaurantCard;