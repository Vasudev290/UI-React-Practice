import { useEffect, useState } from "react";
import { MENU_API_URL } from "../ConstantData";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
 

  //FetchData
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
      //console.log(restaurantMenuCards);
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

      setMenuItems(menuItems);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  return {resInfo, menuItems} ;
};

export default useRestaurantMenu;
