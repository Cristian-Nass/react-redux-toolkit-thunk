/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Product = ({ title, price, imgUrl, productId }) => {
  return (
    <>
      <Link to={`/products/${productId}`}>
        <div
          style={{
            backgroundColor: "green",
            width: "300px",
            padding: "4px",
            margin: "20px auto",
            height: "400px",
            borderRadius: "6px",
          }}
        >
          <img width={280} src={imgUrl} />
          <div>{title}</div>
          <div>{price}</div>
        </div>
      </Link>
    </>
  );
};

export default Product;
