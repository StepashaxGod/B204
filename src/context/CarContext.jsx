import React, { createContext, useState } from "react";
import { cars as initialCars } from "../assets/assets";

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState(initialCars);
  const [cartItems, setCartItems] = useState([]);

  const addCar = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const addToCart = (car) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === car.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...car, quantity: 1 }];
    });
  };

  const removeFromCart = (carId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== carId));
  };

  return (
    <CarContext.Provider
      value={{ cars, addCar, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CarContext.Provider>
  );
};