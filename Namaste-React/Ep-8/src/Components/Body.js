import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { API_VAILD_URL } from "../utils/ConstantData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //Local State Variable - Superpowerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Normal js Variable
  // const listOfRestaurants = [
  //  {
  //   info: {
  //     id: "994419",
  //     name: "FreshMenu",
  //     cloudinaryImageId:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/dc23bbe1-04ba-4414-8c26-7cf9b4118129_994419.jpg",
  //     locality: "Bommanahalli",
  //     cuisines: [
  //       "Continental",
  //       "Chinese",
  //       "Oriental",
  //       "Asian",
  //       "Healthy Food",
  //       "sandwich",
  //       "Indian",
  //       "Desserts",
  //     ],
  //     avgRating: 2.9,
  //     sla: { deliveryTime: 41 },
  //     aggregatedDiscountInfoV3: { subHeader: "AT ₹49" },
  //   },
  // },
  // {
  //   info: {
  //     id: "194610",
  //     name: "Mani's Dum Biryani",
  //     cloudinaryImageId:
  //       "FOOD_CATALOG/IMAGES/CMS/2024/3/27/bc960282-e31e-4e77-97e9-6c6ec9cec813_c46e6499-a9ca-43e8-91d5-85aa6f0afa15.jpg",
  //     locality: "HSR Layout",
  //     cuisines: ["Andhra", "Biryani", "North Indian"],
  //     avgRating: 3.5,
  //     sla: { deliveryTime: 23 },
  //     aggregatedDiscountInfoV3: { subHeader: "ABOVE ₹249" },
  //   },
  // },
  // {
  //   info: {
  //     id: "349608",
  //     name: "Sharief Bhai Biryani",
  //     cloudinaryImageId:
  //       "FOOD_CATALOG/IMAGES/CMS/2024/11/21/53cdb235-e50e-41b4-8d55-de276c3deb7c_90a1c3bb-989a-4db2-9440-80d403adb3d1.jpg",
  //     locality: "Bommanahalli",
  //     cuisines: [
  //       "Biryani",
  //       "South Indian",
  //       "Kebabs",
  //       "Ramzan Special",
  //       "Sweets",
  //       "Beverages",
  //     ],
  //     avgRating: 4.1,
  //     sla: { deliveryTime: 30 },
  //     aggregatedDiscountInfoV3: { subHeader: "AT ₹199" },
  //   },
  // },
  // ];

  //filter handler

  const filterHandler = () => {
    const filtered = listOfRestaurants.filter((res) => res.info.avgRating > 4);
    setListOfRestaurants(filtered);
    console.log(filtered);
  };

  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the components).
  //and whenever you type something the react re-render the component. whole component the re-render
  console.log("Body Rendered!");

  //React is re-render the body component, but it's only updates the input box value inside the DOM,
  //DOM Manipulation is most expensive, react is very effcintly doing this in UI.

  //Third rendered
  useEffect(() => {
    // console.log("useEffect Called!")
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_VAILD_URL);
      const jsonData = await data.json();
      console.log(jsonData);
      // Extract all restaurants from the cards
      const allCards = jsonData?.data?.cards || [];
      const restaurantCards = allCards
        .map((card) => card.card?.card)
        .filter(
          (card) =>
            card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        );

      // Set the restaurant data
      setListOfRestaurants(restaurantCards);
      setFilteredRestaurant(restaurantCards);
    } catch (error) {
      console.log("Error Message :", error);
    }
  };

  //Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer/>
  // }

  //fisrt rendered
  //console.log("Rendered Called!")

  //second rendered
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the Restraunt cards and update the UI
              console.log(searchText);
              const filteredList = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={filterHandler}>
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
