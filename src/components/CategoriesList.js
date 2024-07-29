import { LIST_FOOD_URL } from "../Utility/constants";
const CategoriesList = (props) => {
  return (
    <div>
      {props?.items?.map((item) => {
        const { name, id, price, description, ratings, imageId } =
          item?.card?.info;
        const {
          aggregatedRating: { rating, ratingCountV2 },
        } = ratings;
        return (            
            <div key={id} className="flex items-center justify-between border-b-2 border-b-gray-200">
              <div  className="p-3  text-left">
                <p>{name}</p>
                <p>
                  <span
                    className={`${
                      rating > 3.5 ? "text-green-500" : "text-yellow-500"
                    }`}
                  >
                    {rating && rating}
                  </span>
                  {ratingCountV2 && ` (${ratingCountV2})`}
                </p>
                <p>₹ {price / 100}</p>
                <p className="text-sm">{description}</p>
                <button className="bg-blue-400 rounded-lg border border-black px-3 mt-2">Add</button>
              </div>
              {imageId && (
                <img
                  className="w-32"
                  src={LIST_FOOD_URL + imageId}
                  alt="food"
                />
              )}
            </div>
        );
      })}

    </div>
  );
};

export default CategoriesList;
