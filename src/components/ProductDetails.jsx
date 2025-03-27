import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { cars } from "../assets/assets";
import { CarContext } from "../context/CarContext";
import "../css/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { cars, addToCart } = useContext(CarContext);
  const product = cars.find((car) => car.id === id);
  if (!product) return <div>Product not found.</div>;

  return (
    <section className="product-detail">
      <img src={product.image} alt="" />
      <div className="product-info">
        <p>Car name: {product.name}</p>
        <p>Car Price: {product.price}€</p>
        <p>Car Production Year: {product.productionYear}</p>
        <p>Horsepowers: {product.engine.horsepower}</p>
        <p>Fuel: {product.engine.fuel}</p>
        <p>Car consumption: {product.engine.consumption}</p>
        <p>Car yearly tax: {product.tax}€</p>
        <p>Car color: {product.color}</p>
        <button className="btn-add" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
