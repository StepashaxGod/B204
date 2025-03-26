import React from "react";
import Product from "./Product";
import { cars } from "../assets/assets";

const LatestProducts = () => {
  const sortedCars = [...cars].sort(
    (a, b) => b.productionYear - a.productionYear
  );
  const latestCars = sortedCars.slice(0, 4);

  return (
    <section className="latest-products">
      <h2>Latest Car Releases</h2>
      <div className="product-grid">
        {latestCars.map((car) => (
          <Product key={car.id} product={car} />
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
