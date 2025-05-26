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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h3>{cuisines?.join(", ")}</h3>
      <p>
        <strong>Rating:</strong> {avgRating}⭐
      </p>
      <h3>Delivery within {sla?.deliveryTime} Minutes</h3>
      {aggregatedDiscountInfoV3?.subHeader ? (
        <p>
          <strong>Price:</strong> {aggregatedDiscountInfoV3.subHeader}
        </p>
      ) : (
        <p>
          <strong>Price:</strong> Not available
        </p>
      )}
      <p>
        <strong>Location📌: {locality}</strong>
      </p>
    </div>
  );
};

export default RestaurentCard;
