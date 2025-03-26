import React, { useState, useContext } from "react";
import Product from "./Product";
import "../css/Collection.css";
import { Link } from "react-router-dom";
import { CarContext } from "../context/CarContext";

const AllCars = () => {
  const { cars } = useContext(CarContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="collection-products">
      <h2>All Car Collection</h2>
      <input
        type="text"
        placeholder="Search car by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-grid">
        {filteredCars.map((car) => (
          <Link to={`/product/${car.id}`} key={car.id}>
            <Product product={car} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllCars;
