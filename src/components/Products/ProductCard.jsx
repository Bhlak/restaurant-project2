import "./productCard.css";
const Food = ({ props }) => {
  const { name, description, quantity, price } = props;
  return (
    <div className="product-container">
      <div className="image-container">
        <img className="card-image" src={name} />
      </div>
      <div className="card-details">
        <span className="card-text">
          <h4>{description}</h4>
          <p>{quantity} available</p>
        </span>
        <span>
          <a href="#">${price}</a>
        </span>
      </div>
    </div>
  );
};

export default Food;
