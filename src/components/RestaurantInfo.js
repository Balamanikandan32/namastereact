import { useEffect, useState } from "react";
import { Restaurant_INFO_URL } from "../Utility/constants";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const {restid} = useParams()
  const itemCards =restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  useEffect(() => { 
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Restaurant_INFO_URL + restid);
    const json = await data.json();
    setRestaurantInfo(json);
  };

  return (
    <div>
      <h1>{restaurantInfo?.data.cards?.[0].card.card.text}</h1>
      <h2>menu</h2>
      {itemCards?.map((cards) => (
        <li key={cards?.card?.info?.id}>
          {cards?.card?.info?.name} - Rs {cards?.card?.info?.price /100}
        </li>
      ))}
    </div>
  );
};

export default RestaurantInfo;
