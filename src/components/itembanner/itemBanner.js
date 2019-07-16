import React from "react";
import "./itemBanner.scss";
import Item from "./item/item";

const Itembanner = props => {
  const newProducts = props.products.filter(function(product) {
    return product.type === props.type;
  });
  const items = newProducts.map(product => (
    <Item
      src={product.src}
      price={product.price}
      title={product.title}
      type={product.type}
      handle={product.handle}
    />
  ));
  return (
    <div id="FirstContainer">
      <div className="TitleContainer">
        <div className="bar TitleHeading" />
        <div className="TitleHeading">
          <h1 className="itemHeading">{props.type}</h1>
        </div>
        <div className="bar TitleHeading" />
      </div>

      <div
        id="SecondContainer"
        style={{ display: "flex", overflowX: "auto", width: "100%" }}
      >
        {items}
      </div>
    </div>
  );
};

export default Itembanner;
