import RestaurantCard from "./RestaurantCard";
import { resList } from "../Utility/mockdata";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const clickhandler = () => {
    // const TopRestaurantList = restaurantList.filter(restData => restData?.data?.avgRating > 4)
    // setRestaurantList(TopRestaurantList)
    setRestaurantList((restaurantList) =>
      restaurantList.filter((restData) => restData?.data?.avgRating > 4)
    );
  };

  return (
    <div className="body">
      <div className="search-bar">search bar</div>
      <div>
        <button className="filter-btn" onClick={clickhandler}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
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
