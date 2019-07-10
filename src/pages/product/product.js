import React from "react";
import "./product.scss";
import Quantity from "../../components/quantity/quantity";
import Cart from "../../components/cart/cart";

const Product = props => {

  console.log(props.match.url);
  var regex = /[A-Z]/;
  const url = props.match.url;
  console.log(url);
  console.log(url.match(regex));
  return (
    <div>
      <div class="breadcrumb-box">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </div>

      <div className="d-flex flex-wrap pt-4 flex-row justify-content-around ">
        <img class="image-responsive" src={props.location.state.src} alt="" />

        <div>
          {props.location.state.title}
          <div>Rs. 500</div>
          <Quantity />
          <div className="btn btn-secondary">add</div>
        </div>
      </div>

    </div>
  );
};

export default Product;
