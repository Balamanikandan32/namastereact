import RestaurantCard from "./RestaurantCard";
import { resList } from "../Utility/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">search bar</div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
