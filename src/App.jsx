import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProductsData } from "./state/products/productsSlice";
import HomePage from "./pages/HomePage";
import ProductsList from "./pages/products/ProductsList";
import ProductDetails from "./pages/products/ProductDetails";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsData());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
