import { useEffect, useState } from "react";
import { Restaurant_INFO_URL } from "../Utility/constants";

const useRestaurantMenu = (restid) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchRestInfoData();
  },[]);

  const fetchRestInfoData = async() => {
    const data = await fetch(Restaurant_INFO_URL + restid)
    const json = await data.json()
    setRestaurantInfo(json)
  }

  return restaurantInfo;   // it return null to RestrauntInfo and then it fetch Data, again it return response data to RestaurantInfo so restaurantinfo first executed with null value and then executed with updated value
};

export default useRestaurantMenu
