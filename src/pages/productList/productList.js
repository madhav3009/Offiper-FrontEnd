import React from "react";
import Products from "../../assets/config/products.json";
import Item from "../../components/itembanner/item/item";
import "./productList.scss";

const ProductList = props => {
  const newProducts = Products.filter(function(product) {
    return product.type === props.match.params.type;
  });
  const productList = newProducts.map(product => (
    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
      <Item src={product.src} title={product.title} price={product.price} type={product.type} handle={product.handle}/>
    </div>
  ));
  return (
    <div class="productList">
      <h2>{props.match.params.type}</h2>
      <hr />
      <div class="row">{productList}</div>
      <hr />
    </div>
  );
};
export default ProductList;
