import React from "react";
import "./item.scss";
import { NavLink } from "react-router-dom";

const Item = props => {
  return (
    <div className="Item">
      <NavLink
        to={{
          pathname: props.type + "/" + props.title,
          state: { title: props.title, price: props.price, src: props.src }
        }}
        exact
      >
        <img src={props.src} alt="" />
        <div className="item-detail">
          <h5 className="title">{props.title}</h5>
          <h5 className="title" id="price">
            {props.price}
          </h5>
        </div>
      </NavLink>
    </div>
  );
};
export default Item;
