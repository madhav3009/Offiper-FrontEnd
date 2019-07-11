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


<div class="container temp ">
  <div class="row">
    <div class="col-lg-7">
    <img id="productImg"src={props.location.state.src} alt="" style={{width:"100%",padding:"0px",}}/> 
</div>
<div class="col-lg-5">
  <div class="productTitle"> <p> Pen </p> </div>
  <div class="productDesc"><p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsuma Lorem IpsumLorem Ipsuma Lorem IpsumLorem Ipsuma Lorem IpsumLorem Ipsuma IpsumLorem IpsumLorem </p></div>
  <div id="discPrice"><strike>Rs 1000</strike></div>
  <div id="origPrice"><p>Rs 500</p></div>
   <Quantity />         
  <div class="row add">
    <div class="col-lg-6"><button type="button"id="bucketAdd">Add To Bucket</button></div>
   <div class="col-lg-6"><button type="button" id="cartAdd">Add To Cart</button></div>
  </div>
  
  </div>

</div>      
</div>

</div>        
         

  );
};

export default Product;
