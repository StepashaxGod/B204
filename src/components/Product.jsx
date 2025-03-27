import React from "react";
import { assets, cars } from "../assets/assets";
import "../css/Product.css";

const Product = ({ product }) => {
  return (
    <>
      <div className="product-container">
        <div className="product-image-container">
          <img className="car-image" src={product.image} alt="car" />
        </div>
        <div className="product-description">
          <div>
            <div className="product-name">{product.name}</div>
            <div className="product-additions">
              <div className="">{product.drive}</div>
              <div>{product.category}</div>
            </div>
          </div>
          <div className="right-description-side">
            <div className="product-price">Price: {product.price}€</div>
            <div className="production-time">{product.productionYear}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
