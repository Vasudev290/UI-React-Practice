import { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/ConstantData";
import { CDN_URL } from "../utils/ConstantData";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState([]);

  //fetching data
  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API_URL + resId);
      const jsonData = await data.json();

      // Get all top-level cards
      const allCards = jsonData?.data?.cards || [];

      // Extract Restaurant Info
      const restaurantMenuCards = allCards
        .map((card) => card.card?.card)
        .filter(
          (card) =>
            card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );
      console.log(restaurantMenuCards);
      setResInfo(restaurantMenuCards);

      //Extract Menu Items
      const regularCards =
        allCards.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards || [];

      const menuItems = regularCards
        .map((c) => c.card?.card)
        .filter(
          (c) =>
            c?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

      setMenuInfo(menuItems);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  if (!resInfo || resInfo.length === 0) {
    return <Shimmer />;
  }

  //Destructure;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating } =
    resInfo[0]?.info;

  const imageUrl =  CDN_URL + cloudinaryImageId;

  return (
    <div className="menu-container">
      <div className="restaurant-header">
        <img src={imageUrl} alt={name} />
        <div>
          <h1>{name}</h1>
          <h4>
            {cuisines.join(", ")} • {costForTwoMessage}
          </h4>
          <p>⭐ {avgRating}</p>
        </div>
      </div>
      {menuInfo.map((category) => (
        <div key={category.title} className="menu-category">
          <h2 className="category-title">{category.title}</h2>
          <div className="item-list">
            {category.itemCards.map((itemCard) => {
              const item = itemCard.card.info;
              return (
                <div key={item.id} className="menu-item">
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">
                      ₹{(item.price || item.defaultPrice) / 100}
                    </p>
                    {item.ratings?.aggregatedRating?.rating && (
                      <p className="item-rating">
                        ⭐ {item.ratings.aggregatedRating.rating}
                      </p>
                    )}
                    <p className="item-description">{item.description}</p>
                  </div>
                  <div className="item-image-container">
                    {item.imageId && (
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
                        alt={item.name}
                        className="item-image"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
