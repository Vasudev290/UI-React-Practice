import React, { useState } from "react";
import RestoCard from "./RestoCard";
import productList from "../utils/mockData";

const Body = () => {
    //Local State variable => superpowerful variable
    const [filteredProducts, setFilteredProducts] = useState(productList)
  //filter handler
 const handleTopRated = () => {
    const topRatedList = productList.map(item => ({
      ...item,
      products: item.products.filter(product => product.rating > 4)
    }));
    setFilteredProducts(topRatedList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={handleTopRated}
        >
          Top Rated Product
        </button>
      </div>
      <div className="rest-container">
        {filteredProducts.map((item) =>
          item.products.map((item) => (
            <RestoCard proData={item} key={item.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
