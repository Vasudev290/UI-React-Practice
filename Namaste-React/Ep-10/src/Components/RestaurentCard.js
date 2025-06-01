import { CDN_URL } from "../utils/ConstantData";
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
  return (
    <div className="flex-grow-0 flex-shrink-1 basis-[calc(18%-20px)] bg-gray-100 hover:bg-gray-200 rounded-lg p-4 shadow-md text-center transition-transform duration-200 ease-in-out min-w-[200px] box-border hover:scale-105">
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
    </div>
  );
};

export default RestaurentCard;
