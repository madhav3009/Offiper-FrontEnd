import React from "react";
import PropTypes from 'prop-types';
import "./item.scss";
import { NavLink } from "react-router-dom";

const Item = props => {
  return (
    <div className="Item">
      <div className="discount">50% OFF</div>
      <NavLink
        to={{
          pathname: props.type + "/" + props.handle
        }}
        exact
      >
        <img src={props.src} alt="" class="img-responsive" />
      </NavLink>

      <button id="Addbucket">Add To Bucket</button>
      <button id="Addcart">Add To Cart</button>

      <div className="item-detail">
        <h4>{props.title}</h4>
        <h4 id="Price">
          {props.price} &nbsp; <strike>Rs 1000</strike>
          <br />
        </h4>
      </div>
    </div>
  );
};

Item.propTypes = {
  title:PropTypes.string
  
}
export default Item;
