import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// not using keys (not acceptable) <<<< index as key <<<<<<<<<<< unique id(best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
