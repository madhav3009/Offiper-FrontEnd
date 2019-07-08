import React from "react";
import "./product.scss";

const Product = props => {
  console.log(props.location.state);

  return (
    <div className="d-flex">
     <div><img src={props.location.state.src} alt=""/></div>
     <div>{props.location.state.title}</div>
    </div>
  );
};

export default Product;
