import { CDN_URL } from "../Utility/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  let {
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
  } = restaurantData?.data;
  return (
    <div className="restaurant-cart" style={styleCard}>
      {/* style = {{backgroundColor : "#f0f0f0"}} */}
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant image"
        className="restaurant-image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo / 100} For Two</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
