import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import Offline from "./Offline";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utility/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus()

  useEffect(() => {
    restaurantData();
  }, []);

  const restaurantData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const fetchData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (restrauntlist) => restrauntlist.info
      );
    setRestaurantList(fetchData);
    setFilterRestaurant(fetchData);
    setLoading(false);
  };

  const topRestaurant = () => {
    // const TopRestaurantList = restaurantList.filter(restData => restData?.avgRating > 4)
    // setRestaurantList(TopRestaurantList)
    // setRestaurantList((restaurantList) =>
    //   restaurantList.filter((restData) => restData?.avgRating > 4)
    // );
    const TopRestaurantList = restaurantList.filter(
      (restData) => restData?.avgRating > 4
    );
    setFilterRestaurant(TopRestaurantList);
  };

  return !onlineStatus ? <Offline />: loading ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="filter-container">
        <input
          type="text"
          name="search-bar"
          placeholder="Enter Restaurant Name"
          value={searchText}
          onChange={(event) => {
            setSearchText(event?.target?.value);
          }}
        />
        <button
          onClick={() => {
            const filterList = restaurantList.filter((restData) =>
              restData?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestaurant(filterList);
          }}
        >
          Search
        </button>
        <button className="filter-btn" onClick={topRestaurant}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {filterRestaurant?.map((restaurant) => (
          <Link to={"/restaurantmenu/" + restaurant.id} key={restaurant.id}>
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
