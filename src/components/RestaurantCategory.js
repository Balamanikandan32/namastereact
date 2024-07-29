import CategoriesList from "./CategoriesList";

const RestaurantCategory = (props) => {
    const handleClick = () => {
        props?.setShowItem()
    }
  const { title, itemCards } = props?.data;
  return (
    <div className=" w-3/4 mx-auto my-3 shadow-lg p-2">
        <div className="flex justify-between my-3" onClick={handleClick}>
          <span className="font-bold">
            {title} ({itemCards.length})
          </span>
          <span>{props?.showItem ? "⬆️" : "⬇️"}</span>
        </div>
        {props?.showItem && <CategoriesList items={itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
