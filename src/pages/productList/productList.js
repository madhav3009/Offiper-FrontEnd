import React from "react";
import Products from "../../assets/config/products.json";
import Item from "../../components/itembanner/item/item";

const ProductList = props => {
  const newProducts = Products.filter(function(product) {
    return product.type === props.match.params.type;
  });
  const productList = newProducts.map(product => <Item src={product.src} />);
  return (
    <div>
      <h2>{props.match.params.type}</h2>
      <hr />
      <div>{productList}</div>
    </div>
  );
};
export default ProductList;
