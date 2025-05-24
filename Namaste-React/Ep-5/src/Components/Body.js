import RestaurentCard from "./RestaurentCard";
import resObj from "../utils/mockData";
const Body = () => {
  const resList = resObj.map((item) => item.card);
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
