import React from "react";
import "./Products.css";
import avocado from "./shrimp-avocado-soup.jpg";
import potatoes from "./Baked-stuffed-potatoes.jpg";
import beef from "./Beef soup.jpg";
import carrot from "./Carrot soup.jpg";
import chips from "./Chips.jpeg";
import cocktail from "./Cocktail.jpg";
import paneer from "./fried-paneer.jpg";
import cheese from "./Grilled-cheese.jpg";
import kabab from "./Kabab.jpg";
import tomato from "./Tomato soup.jpg";
import veggy from "./Veggy soup.jpg";
import spinach from "./wilted-spinach.jpg";




function Products() {
    return <>
       <h1 className="product">OUR <small>Products</small></h1>
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
       <link href="css/modern-business.css" rel="stylesheet" />
       

     <div class="row">
       <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={avocado}/>
           <div class="card-body">
             <h4 class="card-title">Shrimp and Avocado Soup</h4>
             <p class="card-text">50 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$70</a>
           </div>
         </div>
       </div>

       <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={potatoes}/>
           <div class="card-body">
             <h4 class="card-title">Baked stuffed Potatoes</h4>
             <p class="card-text">60 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$100</a>
           </div>
         </div>
       </div>

       <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={beef}/>
           <div class="card-body">
             <h4 class="card-title">Beef Soup</h4>
             <p class="card-text">50 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$50</a>
           </div>
         </div>
       </div>

       <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={carrot}/>
           <div class="card-body">
             <h4 class="card-title">Carrot Soup</h4>
             <p class="card-text">100 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$40</a>
           </div>
         </div>
       </div>

       <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={chips}/>
           <div class="card-body">
             <h4 class="card-title">Chips and Chicken</h4>
             <p class="card-text">20 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$50</a>
           </div>
         </div>
       </div>

       <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={cocktail}/>
           <div class="card-body">
             <h4 class="card-title">Cocktail Special</h4>
             <h6 class="card-subtitle mb-2 text-muted">LIMITED EDITION</h6>
             <p class="card-text">10 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$250</a>
           </div>
         </div>
       </div>

       <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={paneer}/>
           <div class="card-body">
             <h4 class="card-title">Fried Paneer Cheese Pakora</h4>
             <p class="card-text">100 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$30</a>
           </div>
         </div>
       </div>     

        <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={cheese}/>
           <div class="card-body">
             <h4 class="card-title">Grilled Cheese Sandwich</h4>
             <p class="card-text">100 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$20</a>
           </div>
         </div>
       </div>         

       <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={kabab}/>
           <div class="card-body">
             <h4 class="card-title">Beef and vegetable Kabab</h4>
             <p class="card-text">200 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$20</a>
           </div>
         </div>
       </div>       

       <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={tomato}/>
           <div class="card-body">
             <h4 class="card-title">Tomato Soup</h4>
             <p class="card-text">400 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$50</a>
           </div>
         </div>
       </div>       

       <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={veggy}/>
           <div class="card-body">
             <h4 class="card-title">vegetable Soup</h4>
             <h6 class="card-subtitle mb-2 text-muted">Vegetarian Special</h6>
             <p class="card-text">50 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$80</a>
           </div>
         </div>
       </div>   

        <div class="col-lg-4 mb-4">
         <div class="card h-100 text-center">
           <img class="card-img-top" src={spinach}/>
           <div class="card-body">
             <h4 class="card-title">Wilted Spinach Salad Bacon</h4>
             <p class="card-text">300 available</p>
           </div>
           <div class="card-footer">
             <a href="#">$60</a>
           </div>
         </div>
       </div>           
     </div>







  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    </>
}


export default Products