const RestoCard = (props) => {
  //const { resName, cuisine, rating, deliveryTime } = props;
  const { proData } = props;
  if (!proData) return <div>No Product Data availabily</div>;
  const { thumbnail, brand, title, tags, rating, stock, price, shippingInformation} = proData;
  return (
    <div className="resto-card">
      <img
        className="res-logo"
        style={{ backgroundColor: "beige" }}
        alt="resto-container"
        src={thumbnail}
      />
      <h3>{brand}</h3>
      <h4>{title}</h4>
      <h3>{tags.join(", ")}</h3>
      <h4>Rating: {rating}⭐</h4>
      <p>
        <strong>In Stock:</strong> {stock}
      </p>
      <p>
        <strong>Price:</strong>
      {price}
      </p>
      <p>
        <strong>Delivery Within:</strong> {shippingInformation}
      </p>
    </div>
  );
};


export default RestoCard; 