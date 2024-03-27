import { useSelector } from "react-redux";
import Product from "../../components/Product";

const ProductsList = () => {
  const products = useSelector((store) => store.products.productsData);
  return (
    <div className="wrapper">
      {products.map((item) => (
        <Product
          key={item.id}
          title={item.title}
          price={item.price}
          imgUrl={item.image}
          productId={item.id}
        />
      ))}
    </div>
  );
};

export default ProductsList;
