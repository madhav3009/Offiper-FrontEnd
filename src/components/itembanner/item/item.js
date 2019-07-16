import React, { useContext } from "react";
import "./item.scss";
import { NavLink } from "react-router-dom";
import { ProductContextConsumer } from "../../../context/product.context";

const Item = props => {
  const { storeProductData } = useContext(ProductContextConsumer);
  function addProductDataToContext() {
    let p={title:props.title,src:props.src,price:props.price}
    storeProductData(p);
  }
  return (
    <div className="Item">
      <NavLink
        to={{
          pathname: props.type + "/" + props.title
        }}
        exact
        onClick={addProductDataToContext}
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
