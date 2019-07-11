import React from "react";
import "./product.scss";
import Quantity from "../../components/quantity/quantity";

const Product = props => {
  console.log(props);
  
  const urlB = props.match.url.split("/");
  var urlL = [];
  for (let i = 1; i < urlB.length - 1; i++) {
    const hreff = "/" + urlB[i];
    urlL = (
      <li class="breadcrumb-item">
        <a href={hreff}>{urlB[i]}</a>
      </li>
    );
  }
  return (
    <div>
      <div class="breadcrumb-box">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          {urlL}
          <li class="breadcrumb-item active" aria-current="page">
            {urlB[urlB.length - 1]}
          </li>
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
