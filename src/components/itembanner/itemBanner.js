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
       <div className="TitleHeading">
       <h3 className="itemHeading">{props.type}</h3>
      </div>
    </div>
  <div id="SecondContainer" class="d-flex flex-row p-2">{items}</div>
</div>
    
  );
};

export default Itembanner;
