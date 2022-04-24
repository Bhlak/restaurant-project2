<<<<<<< HEAD
const About = () => {
  return <div>About</div>;
};

export default About;
=======
import React from "react";
import './About.css'
import soup from './soup-restaurant.jpg';
import enormico from './enormico.png';

function About() {
    return <>
    <body className="rem">
      <h1 className="about">About<small> US</small></h1>
      <img src= {enormico} className="enormico" />
       <img src={soup} className="soup" />
       <br></br>
       <br></br>
       <div className="pos">
            <b><h3>Enormico's Inspired Soups</h3></b>
            <p>Enormico soups menu is home to a great variety of options.<br/>
            We are constantly improving our soup menu, spices menu among others.<br/>
            In fact there are 34 million ways to make an Enormico soup. Our freshly produced aromatics are steamed <br/>
            till a very succulent brew is attained.</p>
            <br /><br /><br/> <br/> <br/> <br/> <br/>
            <b><h3>More Than A Soup Menu</h3></b>      
            <p>When it comes to our menus, Enormico is dedicated to variety and innovation - that is <br/>
               why there is so much more to Enormico soups and spices than just soup. In addition to a <br/>
               reinvented soup menu, Enormico has added a number of other unique sides, <br/>
               and deserts to its menu. Grilled Cheese Sandwich, Wilted Spinach Salad Bacon, <br/>
               Fried Paneer Cheese Pakora are all featured on the Enormico soups and spices delightful Menu.</p>
       </div>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
       </body>
     </>
}

export default About
>>>>>>> 148ead30f7d2bcb00a2c63401a78c5a9f5d23289
