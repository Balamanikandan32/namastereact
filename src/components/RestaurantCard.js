import { useContext } from "react";
import { CDN_URL } from "../Utility/constants";
import UserContext from "../Utility/UserContext";

const styleCard = {
  // backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {loggiedInUser} = useContext(UserContext)
  let {
    name,
    cuisines,
    costForTwo,
    avgRating,
    cloudinaryImageId,
    sla
  } = restaurantData;
  return (
    <div className="restaurant-cart w-[250] h-[450] m-2 p-3 rounded-lg bg-gray-100 hover:bg-gray-300 " style={styleCard}>
      {/* style = {{backgroundColor : "#f0f0f0"}} */}
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant image"
        className="restaurant-image w-[250] h-[200] rounded-xl mb-2"
      />
      <h3 className="font-bold my-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo.split(" ")[0]} For Two</h4>
      <h4>{Number(avgRating) ? avgRating : "--"} stars</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      <h4>{loggiedInUser}</h4>
    </div>
  );
};

export const withVegRestaurant = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="absolute m-2 rounded-lg bg-green-400 text-white px-2 ">Veg Available</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}


export default RestaurantCard;