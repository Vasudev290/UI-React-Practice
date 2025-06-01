import { useEffect, useState } from "react";
import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/ConstantData";
import { CDN_URL } from "../utils/ConstantData";
import useRestaurantMenu from "../utils/CustomHooks/useReaurantMenu";
const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  // const [menuInfo, setMenuInfo] = useState([]);

   const { resId } = useParams();

   //Custom Hooks
   const {resInfo, menuItems} = useRestaurantMenu(resId);

  //fetching data
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(MENU_API_URL + resId);
  //     const jsonData = await data.json();

  //     // Get all top-level cards
  //     const allCards = jsonData?.data?.cards || [];

  //     // Extract Restaurant Info
  //     const restaurantMenuCards = allCards
  //       .map((card) => card.card?.card)
  //       .filter(
  //         (card) =>
  //           card?.["@type"] ===
  //           "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  //       );
  //     console.log(restaurantMenuCards);
  //     setResInfo(restaurantMenuCards);

  //     //Extract Menu Items
  //     const regularCards =
  //       allCards.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap
  //         ?.REGULAR?.cards || [];

  //     const menuItems = regularCards
  //       .map((c) => c.card?.card)
  //       .filter(
  //         (c) =>
  //           c?.["@type"] ===
  //           "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //       );

  //     setMenuInfo(menuItems);
  //   } catch (error) {
  //     console.log("Error :", error);
  //   }
  // };

  if (!resInfo || resInfo.length === 0) {
    return <Shimmer />;
  }

  //Destructure;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating } =
    resInfo[0]?.info || {};

  const imageUrl = CDN_URL + cloudinaryImageId;

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans bg-white shadow-lg rounded-lg my-8">
      <div className="flex items-center gap-6 mb-8 pb-4 border-b border-gray-200">
        <img
          src={imageUrl}
          alt={name}
          className="w-40 h-32 rounded-lg object-cover shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          <h4 className="text-base text-gray-600">
            {cuisines.join(", ")} • {costForTwoMessage}
          </h4>
          <p className="font-semibold text-lg text-green-600">⭐ {avgRating}</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Recommended</h2>
      {menuItems.length > 0 ? (
        menuItems.map((category) => (
          // Check if it's an ItemCategory (a section like "Recommended")
          category["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && (
            <div key={category.title} className="mb-8">
              {/* Only show title if it's not "Recommended" or if you want to explicitly show "Recommended" */}
              {/* If you specifically want 'Recommended' as a fixed header, you might hide this category.title conditionally */}
              {/* <h2 className="text-xl font-bold mb-4 text-gray-800">{category.title}</h2> */}
              <div className="divide-y divide-gray-200">
                {category.itemCards.map((itemCard) => {
                  const item = itemCard.card.info;
                  return (
                    <div key={item.id} className="flex justify-between items-start py-4 gap-5">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1 text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-base font-medium mb-1 text-gray-700">
                          ₹{(item.price || item.defaultPrice) / 100}
                        </p>
                        {item.ratings?.aggregatedRating?.rating && (
                          <p className="text-sm text-green-600 mb-1">
                            ⭐ {item.ratings.aggregatedRating.rating}
                          </p>
                        )}
                        <p className="text-sm text-gray-600 leading-normal">
                          {item.description}
                          {/* Display energy, protein, etc. if available in description */}
                          {item.description && item.description.includes('[Energy:') && (
                              <span className="block text-xs text-gray-500 mt-1">
                                {item.description.substring(item.description.indexOf('[Energy:'))}
                              </span>
                          )}
                        </p>
                      </div>
                      <div className="w-32 flex-shrink-0 text-center">
                        {item.imageId && (
                          <img
                            src={CDN_URL + item.imageId}
                            alt={item.name}
                            className="w-full h-24 object-cover rounded-md mb-2 shadow-sm"
                          />
                        )}
                        <button className="px-3 py-1 bg-white text-green-600 border border-green-600 rounded-md font-bold text-sm cursor-pointer transition-colors hover:bg-green-50 active:bg-green-100">
                          ADD
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        ))
      ) : (
        <p className="text-gray-600">No menu items available.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;