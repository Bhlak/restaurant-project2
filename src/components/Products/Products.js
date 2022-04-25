import React from "react";
import "./Products.css";
import avocado from "./images/shrimp-avocado-soup.jpg";
import potatoes from "./images/Baked-stuffed-potatoes.jpg";
import beef from "./images/Beef soup.jpg";
import carrot from "./images/Carrot soup.jpg";
import chips from "./images/Chips.jpeg";
import cocktail from "./images/Cocktail.jpg";
import paneer from "./images/fried-paneer.jpg";
import cheese from "./images/Grilled-cheese.jpg";
import kabab from "./images/Kabab.jpg";
import tomato from "./images/Tomato soup.jpg";
import veggy from "./images/Veggy soup.jpg";
import spinach from "./images/wilted-spinach.jpg";
import ProductCard from "./ProductCard";

const meals = [
  {
    name: avocado,
    description: "Shrimp and Avocado Soup",
    quantity: 50,
    price: 70,
  },
  {
    name: potatoes,
    description: "Baked stuffed Potatoes",
    quantity: 60,
    price: 100,
  },
  { name: beef, description: "Beef Soup", quantity: 50, price: 50 },
  {
    name: carrot,
    description: "Carrot Soup",
    quantity: 100,
    price: 40,
  },
  {
    name: chips,
    description: "Chips and Chicken",
    quantity: 20,
    price: 50,
  },
  {
    name: cocktail,
    description: "Cocktail Special",
    quantity: 10,
    price: 250,
  },
  {
    name: paneer,
    description: "Fried Paneer Cheese Pakora",
    quantity: 100,
    price: 30,
  },
  {
    name: cheese,
    description: "Grilled Cheese Sandwich",
    quantity: 100,
    price: 20,
  },
  {
    name: kabab,
    description: "Beef and vegetable Kabab",
    quantity: 200,
    price: 20,
  },
  {
    name: tomato,
    description: "Tomato Soup",
    quantity: 400,
    price: 50,
  },
  {
    name: veggy,
    description: "Vegetable Soup",
    quantity: 50,
    price: 80,
  },
  {
    name: spinach,
    description: "Wilted Spinach Salad Bacon",
    quantity: 300,
    price: 60,
  },
];

function Products() {
  return (
    <div className="products-container">
      <h4>Our Products</h4>
      <div className="menu-items">
        {meals.map((c) => (
          <ProductCard props={c} />
        ))}
      </div>
    </div>
  );
}

export default Products;
