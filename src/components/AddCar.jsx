import React, { useState, useContext } from "react";
import { CarContext } from "../context/CarContext";
import "../css/AddCar.css";

const AddCar = () => {
  const { addCar } = useContext(CarContext);

  const [formData, setFormData] = useState({
    id: Date.now().toString(),
    name: "",
    price: "",
    category: "",
    productionYear: "",
    horsepower: "",
    fuel: "",
    consumption: "",
    tax: "",
    drive: "",
    color: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(formData);
    alert("Car added successfully!");
  };

  return (
    <section className="add-product">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Car Name" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price (€)" onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
        <input type="number" name="productionYear" placeholder="Production Year" onChange={handleChange} required />
        <input type="text" name="horsepower" placeholder="Horsepower" onChange={handleChange} required />
        <input type="text" name="fuel" placeholder="Fuel Type" onChange={handleChange} required />
        <input type="text" name="consumption" placeholder="Fuel Consumption" onChange={handleChange} required />
        <input type="number" name="tax" placeholder="Yearly Tax (€)" onChange={handleChange} required />
        <input type="text" name="drive" placeholder="Drive Type" onChange={handleChange} required />
        <input type="text" name="color" placeholder="Color" onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} required />

        <button type="submit">Add Product</button>
      </form>
    </section>
  );
};

export default AddCar;