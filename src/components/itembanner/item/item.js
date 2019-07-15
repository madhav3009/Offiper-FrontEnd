import React from "react";
import "./item.scss";
import { NavLink } from "react-router-dom";

const Item = props => {
  return (


    <div className="Item">
    
         <div className="discount">50% OFF</div>
         <NavLink
        to={{
          pathname: props.type + "/" + props.title,
          state: { title: props.title, price: props.price, src: props.src }
        }}
        exact
      >
        <img src={props.src} alt="" />
        
        </NavLink>
          
          <button id="Addbucket">Add To Bucket</button>
          <button id="Addcart">Add To Cart</button>
     

        <div className="item-detail">
         
          <h4>{props.title}</h4>
          <h4 id="Price">{props.price} &nbsp; <strike>Rs 1000</strike>
          <br />
          </h4>
        </div>

    </div>
  );
};
export default Item;
