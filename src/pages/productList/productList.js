import React from "react";
import Products from "../../assets/config/products.json";
import Item from "../../components/itembanner/item/item";
import "./productList.scss";

const ProductList = props => {
  const newProducts = Products.filter((product)=> {
    return product.type === props.match.params.type;
  });
  const productList = newProducts.map(product => (
    <div class="products align-self-center">
      <Item src={product.src} title={product.title} price={product.price} type={product.type} handle={product.handle}/>
    </div>
  ));
  return (
    <div class="productList">
      <h2>{props.match.params.type}</h2>
    <div>
      {productList}</div>
    </div>
  );
};
export default ProductList;
