import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { API_VAILD_URL } from "../utils/ConstantData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatues";

const Body = () => {
  //Local State Variable - Superpowerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList||[]);
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList||[]);
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h3>
        Looks like you're offline!! Please check your Internet Connection!
      </h3>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-5 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center flex-wrap mb-5">
        <div className="m-4 p-4 border-solid border-black">
          <input
            type="text"
            className="p-2 text-base w-64 border border-gray-300 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-md cursor-pointer hover:bg-green-300 transition-colors"
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
        <button
          className="px-4 py-2 bg-green-300 rounded-md cursor-pointer shadow-md transition-transform hover:scale-105 my-2 md:my-0"
          onClick={filterHandler}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="flex flex-wrap gap-5 justify-start">
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
