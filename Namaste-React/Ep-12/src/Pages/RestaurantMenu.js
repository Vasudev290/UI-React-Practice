import { useState } from "react";
import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/ConstantData";
import useRestaurantMenu from "../utils/CustomHooks/useReaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../Slices/cartSlice";

const RestaurantMenu = () => {
  //Dynamic Route
  const { resId } = useParams();

  //Custom Hooks
  const { resInfo, menuItems } = useRestaurantMenu(resId);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
  console.log(menuItems);

  //Dispatching the action from createSlice (RTK)
  const dispatch = useDispatch();

  //Conditional Rendering
  if (!resInfo) {
    return <Shimmer />;
  }

  //Destructure;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating } =
    resInfo[0]?.info || {};

  const imageUrl = CDN_URL + cloudinaryImageId;

  const menuCategories = menuItems.filter(
    (item) =>
      item["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  //Adding Cart Item
  const handleAddItem = (item) => {
    //Dispatch action
    dispatch(addItem(item));
    //console.log("Pizza");
    console.log(item);
  };

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

      {/* Menu Categories Accordion */}
      {menuCategories.length > 0 ? (
        <div className="mt-8">
          {menuCategories.map((category, index) => (
            <div
              key={category.title}
              className="border-b border-gray-200 last:border-b-0 py-4"
            >
              {/* Accordion Header */}
              <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-xl font-bold text-gray-800 select-none">
                  {category.title} ({category.itemCards?.length || 0})
                </h2>
                <span
                  className={`transform transition-transform duration-300 ${
                    openAccordionIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ⬇️
                </span>
              </div>

              {/* Accordion Content (Menu Items) => Control Component*/}
              {openAccordionIndex === index && (
                <div className="pt-4 divide-y divide-gray-200">
                  {category.itemCards && category.itemCards.length > 0 ? (
                    category.itemCards.map((itemCard) => {
                      const item = itemCard.card.info;
                      return (
                        <div
                          key={item.id}
                          className="flex justify-between items-start py-4 gap-5"
                        >
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
                              {item.description &&
                                item.description.includes("[Energy:") && (
                                  <span className="block text-xs text-gray-500 mt-1">
                                    {item.description.substring(
                                      item.description.indexOf("[Energy:")
                                    )}
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
                            <button
                              className="px-3 py-1 bg-white text-green-600 border border-green-600 rounded-md font-bold text-sm cursor-pointer transition-colors hover:bg-green-50 active:bg-green-100"
                              onClick={() => handleAddItem(item)}
                            >
                              ADD+
                            </button>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-gray-600 text-sm">
                      No items in this category.
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No menu categories available.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
