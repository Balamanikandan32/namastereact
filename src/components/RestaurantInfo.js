import { useEffect, useState } from "react";
import { Restaurant_INFO_URL } from "../Utility/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utility/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantInfo = () => {
  // const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [showItem, setShowItem] = useState(0);
  const { restid } = useParams();
  const restaurantInfo = useRestaurantMenu(restid);
  const itemCards =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;
  // IMPLEMENTED USING CUSTOM HOOKS

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(Restaurant_INFO_URL + restid);
  //   const json = await data.json();
  //   setRestaurantInfo(json);
  // };
  const categories =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center m-3">
      <h1 className=" font-bold text-lg ">
        {restaurantInfo?.data.cards?.[0].card.card.text}
      </h1>
      {categories?.map((card, index) => (
        <RestaurantCategory
          key={index}
          data={card?.card?.card}
          showItem={index === showItem ? true : false}
          setShowItem = {()=>  setShowItem(index === showItem ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantInfo;
