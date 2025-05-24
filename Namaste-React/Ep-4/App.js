import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -Logo
 *  -Nav Item
 * Body
 *  -Search
 *  -RestraurentContainer
 *   -RestraurentCard
 *    -Image
 *    -Name of the Rest, Star Rating, cuisines, deliveryTime
 * Footer
 *  -CopyRoghts
 *  -links
 *  -Address
 *  -Contact
 */

//Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG82dlNNqjyryCgXS4CKQjn3VO2aRjQdaetg&s"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//One way of writing props
// const RestoCard = (props)=> {
//       <h4>{props.cuisine}</h4>
//       <h3>{props.resName}</h3>
//       <h5>{props.rating}</h5>
//       <h5>{props.deliveryTime}</h5>
// }

//second way of writing props
// const RestoCard = ({resName, cuisine, rating, deliveryTime})=> {
//       <h4>{cuisine}</h4>
//       <h3>{resName}</h3>
//       <h5>{rating}</h5>
//       <h5>{deliveryTime}</h5>
// }

//third way of writing props

//RestoCard Component
const RestaurentCard = (props) => {
  //console.log(props)
  //const { resName, cuisine, rating, deliveryTime } = props;
  if (!props || !props.resData) return <div>No item not available</div>;
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    aggregatedDiscountInfoV3,
    locality,
  } = resData.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      {/* <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4> */}
      <h4>{name}</h4>
      <h3>{cuisines.join(", ")}</h3>
      <p>
        <strong>Rating:</strong> {avgRating}⭐
      </p>
      <h3>Delivery within {sla.deliveryTime} Minutes</h3>
      <p>
        <strong>Price: {aggregatedDiscountInfoV3.subHeader}</strong>
      </p>
      <p>
        <strong>Location📌: {locality}</strong>
      </p>
    </div>
  );
};

const resObj = [
  {
    card: {
      info: {
        id: "994419",
        name: "FreshMenu",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/dc23bbe1-04ba-4414-8c26-7cf9b4118129_994419.jpg",
        locality: "Bommanahalli",
        cuisines: [
          "Continental",
          "Chinese",
          "Oriental",
          "Asian",
          "Healthy Food",
          "sandwich",
          "Indian",
          "Desserts",
        ],
        avgRating: 3.9,
        sla: { deliveryTime: 41 },
        aggregatedDiscountInfoV3: { subHeader: "AT ₹49" },
      },
    },
  },
  {
    card: {
      info: {
        id: "194610",
        name: "Mani's Dum Biryani",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/3/27/bc960282-e31e-4e77-97e9-6c6ec9cec813_c46e6499-a9ca-43e8-91d5-85aa6f0afa15.jpg",
        locality: "HSR Layout",
        cuisines: ["Andhra", "Biryani", "North Indian"],
        avgRating: 4.5,
        sla: { deliveryTime: 23 },
        aggregatedDiscountInfoV3: { subHeader: "ABOVE ₹249" },
      },
    },
  },
  {
    card: {
      info: {
        id: "349608",
        name: "Sharief Bhai Biryani",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/11/21/53cdb235-e50e-41b4-8d55-de276c3deb7c_90a1c3bb-989a-4db2-9440-80d403adb3d1.jpg",
        locality: "Bommanahalli",
        cuisines: [
          "Biryani",
          "South Indian",
          "Kebabs",
          "Ramzan Special",
          "Sweets",
          "Beverages",
        ],
        avgRating: 4.1,
        sla: { deliveryTime: 30 },
        aggregatedDiscountInfoV3: { subHeader: "AT ₹199" },
      },
    },
  },
  {
    card: {
      info: {
        id: "1004721",
        name: "Mr Phillys American Cheeseburgers",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/c41fe099-61b1-45cd-af96-9eee8d87e119_1004721.jpg",
        locality: "HSR Layout",
        cuisines: [
          "American",
          "Biryani",
          "Fast Food",
          "Burgers",
          "wrap",
          "Salads",
        ],
        avgRating: 4.4,
        sla: { deliveryTime: 18 },
        aggregatedDiscountInfoV3: { subHeader: "UPTO ₹120" },
      },
    },
  },
  {
    card: {
      info: {
        id: "1007933",
        name: "Anmay Foods - Andhra Style Restaurant",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/5890575e-90f8-4135-a7b7-8cc683332a48_1007933.jpg",
        locality: "HSR Layout",
        cuisines: [
          "Andhra",
          "Biryani",
          "South Indian",
          "Chinese",
          "North Indian",
        ],
        avgRating: 4.3,
        sla: { deliveryTime: 30 },
        aggregatedDiscountInfoV3: { subHeader: "UPTO ₹100" },
      },
    },
  },
  {
    card: {
      info: {
        id: "323187",
        name: "Meghana Foods",
        cloudinaryImageId: "iivuhjc2mswi9lublktf",
        locality: "Hosur Road",
        cuisines: ["Biryani", "Andhra", "South Indian", "Chinese", "Seafood"],
        avgRating: 4.6,
        sla: { deliveryTime: 25 },
        aggregatedDiscountInfoV3: { subHeader: "ABOVE ₹249" },
      },
    },
  },
  {
    card: {
      info: {
        id: "156414",
        name: "The Good Bowl",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/3d1e512a-c179-421f-969d-e05e50ed5b59_156414.jpg",
        locality: "Sector 2, 27th Main Road, HSR Layout",
        cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
        avgRating: 4.3,
        sla: { deliveryTime: 21 },
        aggregatedDiscountInfoV3: { subHeader: "UPTO ₹80" },
      },
    },
  },
  {
    card: {
      info: {
        id: "84930",
        name: "Biryani Zest",
        cloudinaryImageId: "nqsofzc5tobfe4sflvgy",
        locality: "Vignana Nagar",
        cuisines: [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Tandoor",
        ],
        avgRating: 4.3,
        sla: { deliveryTime: 25 },
        aggregatedDiscountInfoV3: { subHeader: "ABOVE ₹249" },
      },
    },
  },
  {
    card: {
      info: {
        id: "361866",
        name: "Peetuk",
        cloudinaryImageId: "mjbyg3ph9jsh0b6d3mwm",
        locality: "7th Cross, Domlur",
        cuisines: ["Bengali", "Chinese"],
        avgRating: 4.3,
        sla: { deliveryTime: 27 },
        aggregatedDiscountInfoV3: { subHeader: "ABOVE ₹499" },
      },
    },
  },
  {
    card: {
      info: {
        id: "14837",
        name: "High Street",
        cloudinaryImageId: "qqwbp7qd3ujocqjhqxvt",
        locality: "HSR Layout",
        cuisines: [
          "Biryani",
          "North Indian",
          "Tandoor",
          "Hyderabadi",
          "Andhra",
          "Chinese",
        ],
        avgRating: 4.4,
        sla: { deliveryTime: 24 },
        aggregatedDiscountInfoV3: { subHeader: "UPTO ₹100" },
      },
    },
  },
  {
    card: {
      info: {
        id: "83129",
        name: "UBQ-Meals,Thalis & Bowls",
        cloudinaryImageId: "gsjdnjaohsvbbp0uspfz",
        locality: "Indiranagar",
        cuisines: ["Barbecue", "Biryani", "Kebabs", "Mughlai", "Desserts"],
        avgRating: 4.1,
        sla: { deliveryTime: 35 },
        aggregatedDiscountInfoV3: { subHeader: "UPTO ₹100" },
      },
    },
  },
  {
    card: {
      info: {
        id: "41795",
        name: "Behrouz Biryani",
        cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
        locality:
          "Beml Circle, Opp Kempegowda Statue, Below Red chilly restaurant, Near GMR Pride HDFC bank",
        cuisines: [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.2,
        sla: { deliveryTime: 25 },
        aggregatedDiscountInfoV3: { subHeader: "UPTO ₹126" },
      },
    },
  },
  {
    card: {
      info: {
        id: "186098",
        name: "The Biryani Life",
        cloudinaryImageId: "wzlncs2jpigoeu6dc7os",
        locality:
          "Beml Circle, Opp Kempegowda Statue, Below Red chilly restaurant, Near GMR Pride HDFC bank",
        cuisines: [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages",
        ],
        avgRating: 3.9,
        sla: { deliveryTime: 19 },
        aggregatedDiscountInfoV3: { subHeader: "ABOVE ₹549" },
      },
    },
  },
  {
    card: {
      info: {
        id: "142291",
        name: "Aroma's Hyderabad House",
        cloudinaryImageId: "jdfi5bh0hmdet7g7qk5z",
        locality: "HSR Layout Sector 4",
        cuisines: ["Biryani", "Hyderabadi", "Mughlai", "Chinese"],
        avgRating: 4.1,
        sla: { deliveryTime: 20 },
        aggregatedDiscountInfoV3: { subHeader: "ABOVE ₹249" },
      },
    },
  },
  {
    card: {
      info: {
        id: "23682",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/642b77bd-1693-4df9-9557-669d298d7c34_23682.JPG",
        locality: "HSR Layout",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.4,
        sla: { deliveryTime: 19 },
        aggregatedDiscountInfoV3: { subHeader: "UPTO ₹80" },
      },
    },
  },
  {
    card: {
      info: {
        id: "57283",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/049a53cb-230b-44d9-bae3-5477f719c2d1_57283.jpg",
        locality: "HSR Layout",
        cuisines: ["Burgers", "American"],
        avgRating: 4.2,
        sla: { deliveryTime: 19 },
        aggregatedDiscountInfoV3: { subHeader: "AT ₹139" },
      },
    },
  },
  {
    card: {
      info: {
        id: "167636",
        name: "Easybites By Empire",
        cloudinaryImageId: "67aa20d5bff8c2d59a5ebd3e700daa25",
        locality: "HSR Layout 6th Sector",
        cuisines: ["Snacks", "Fast Food", "Beverages"],
        avgRating: 4.4,
        sla: { deliveryTime: 30 },
        aggregatedDiscountInfoV3: { subHeader: "ABOVE ₹249" },
      },
    },
  },
  {
    card: {
      info: {
        id: "895461",
        name: "Wendy's Burgers",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/54f06f7b-3a32-442b-a554-1ca00deae383_895461.JPG",
        locality: "27th Main Road, HSR Layout",
        cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
        avgRating: 4.2,
        sla: { deliveryTime: 25 },
        aggregatedDiscountInfoV3: { subHeader: "UPTO ₹126" },
      },
    },
  },
  {
    card: {
      info: {
        id: "1004727",
        name: "Mr Phillys American Cheeseburgers",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/c41fe099-61b1-45cd-af96-9eee8d87e119_1004721.jpg",
        locality: "HSR Layout Sector 4",
        cuisines: [
          "American",
          "Biryani",
          "Fast Food",
          "Burgers",
          "wrap",
          "Salads",
        ],
        avgRating: 4.4,
        sla: { deliveryTime: 19 },
        aggregatedDiscountInfoV3: { subHeader: "ABOVE ₹249" },
      },
    },
  },
  {
    card: {
      info: {
        id: "17036",
        name: "Leon's - Burgers & Wings (Leon Grill)",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33319107-783d-4484-97e8-2fac21b4c9b7_17036.jpg",
        locality: "HSR Layout",
        cuisines: [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental",
        ],
        avgRating: 4.4,
        sla: { deliveryTime: 22 },
        aggregatedDiscountInfoV3: { subHeader: "UPTO ₹146" },
      },
    },
  },
];
const resList = resObj.map((item) => item.card);

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurentCard resData={resList[0]} /> */}
        {resList.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
