import { useState } from "react";
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
  //Local State Variable - Superpowerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

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

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filter-btn" onClick={filterHandler}>
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {/* with mockData */}
        {/* {resList.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
