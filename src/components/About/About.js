import React from "react";
import "./About.css";
import soup from "./soup-restaurant.jpg";
import enormico from "./enormico.png";

function About() {
  return (
    <div className="about-container">
      <h1 className="about">About Us</h1>
      <div className="rem">
        <span className="text-container">
          <h3>Enormico's Inspired Soups</h3>
          <p>
            Enormico soups menu is home to a great variety of options.
            <br />
            We are constantly improving our soup menu, spices menu among others.
            <br />
            In fact there are 34 million ways to make an Enormico soup. Our
            freshly produced aromatics are steamed <br />
            till a very succulent brew is attained.
          </p>
        </span>
        <img src={enormico} className="enormico" />
      </div>
      <div className="rem">
        <img src={soup} className="soup" />
        <span className="text-container">
          <h3>More Than A Soup Menu</h3>
          <p>
            When it comes to our menus, Enormico is dedicated to variety and
            innovation - that is <br />
            why there is so much more to Enormico soups and spices than just
            soup. In addition to a <br />
            reinvented soup menu, Enormico has added a number of other unique
            sides, <br />
            and deserts to its menu. Grilled Cheese Sandwich, Wilted Spinach
            Salad Bacon, <br />
            Fried Paneer Cheese Pakora are all featured on the Enormico soups
            and spices delightful Menu.
          </p>
        </span>
      </div>
    </div>
  );
}

export default About;
