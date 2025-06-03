import { useContext } from "react";
import { CDN_URL } from "../utils/ConstantData";
import UserContext from "../utils/Contexts/UserContext";
const RestaurentCard = (props) => {
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

  //Context
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-md text-center min-w-[200px] box-border h-full">
      <img
        className="w-full h-36 rounded-lg object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="mt-2 text-lg font-bold">{name}</h4>
      <h3 className="text-sm text-gray-700">{cuisines?.join(", ")}</h3>
      <p className="mt-1">
        <strong className="font-semibold">Rating:</strong> {avgRating}⭐
      </p>
      <h3 className="mt-1">Delivery within {sla?.deliveryTime} Minutes</h3>
      {aggregatedDiscountInfoV3?.subHeader ? (
        <p className="mt-1">
          <strong className="font-semibold">Price:</strong> {aggregatedDiscountInfoV3.subHeader}
        </p>
      ) : (
        <p className="mt-1">
          <strong className="font-semibold">Price:</strong> Not available
        </p>
      )}
      <p className="mt-1">
        <strong className="font-bold">Location📌: {locality}</strong>
      </p>
      <h1 className="font-bold"> User : {loggedInUser}</h1>
    </div>
  );
};


//Higher Order Component

//input -  RestaurentCard => RestaurentCardPromoted

export const withPromotedLabel = ( RestaurentCard ) => {
  return ( props ) => {
    return (
      <div className="relative flex-grow-0 flex-shrink-1 basis-[calc(18%-20px)] transition-transform duration-200 ease-in-out hover:scale-105">
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg z-10 text-sm">Promoted</label>
        <RestaurentCard {...props}/>
      </div>
    )
  }
}
export default RestaurentCard;
