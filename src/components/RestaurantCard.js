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
    cloudinaryImageId,
    sla
  } = restaurantData;
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
      <h4>{costForTwo.split(" ")[0]} For Two</h4>
      <h4>{Number(avgRating) ? avgRating : "--"} stars</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;