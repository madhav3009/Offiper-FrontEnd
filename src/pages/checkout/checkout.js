import React, { useState } from "react";
import "./checkout.scss";
import Login from "../../components/form/login/login";
import Address from "../../components/form/address/address";
import PaymentGateway from "../../components/paymentGateway/paymentGateway";
import $ from "jquery";
const Checkout = props => {
  return (
    <div class="checkoutPage">
      <h2>Payment</h2>
      <hr />
      <div class="accordion" id="cartAccordion">
        <div class="card">
          <div
            class="card-header align-items-center"
            data-toggle="collapse"
            data-target="#collapseAccount"
            aria-expanded="true"
            aria-controls="collapseAccount"
            id="account"
          >
            <div class="d-flex">
              <div className="col-icon text-center">
                <i class="fa fa-user" />
              </div>
              <div class="accord-title">
                <p class="h3">
                  Account
                  <br />
                  <small class="h6">
                    To place your order now, log in to your existing account or
                    sigin up
                  </small>
                </p>
              </div>

              <div className="col-icon text-center">
                <i class="fa fa-plus" />
              </div>
            </div>
          </div>

          <div
            id="collapseAccount"
            class="collapse show"
            data-parent="#cartAccordion"
          >
            <div class="card-body">
              <Login />
            </div>
          </div>
        </div>

        <div class="card">
          <div
            class="card-header align-items-center"
            data-toggle="collapse"
            data-target="#collapseAddress"
            aria-expanded="false"
            aria-controls="collapseAddress"
            id="address"
          >
            <div class="d-flex">
              <div className="col-icon text-center ">
                <i class="fa fa-map-marker" />
              </div>
              <div class="accord-title">
                <p class="h3">
                  Delivery Address
                  <br />
                  <small class="h6">To receive your product</small>
                </p>
              </div>

              <div className="col-icon text-center">
                <i class="fa fa-plus" />
              </div>
            </div>
          </div>

          <div
            id="collapseAddress"
            class="collapse"
            data-parent="#cartAccordion"
          >
            <div class="card-body">
              <Address />
            </div>
          </div>
        </div>

        <div class="card">
          <div
            class="card-header align-items-center"
            data-toggle="collapse"
            data-target="#collapsePayment"
            aria-expanded="false"
            aria-controls="collapsePayment"
            id="payment"
          >
            <div class="d-flex">
              <div className="col-icon text-center ">
                <i class="fa fa-credit-card" />
              </div>
              <div class="accord-title">
                <p class="h3">Payment</p>
              </div>

              <div className="col-icon text-center">
                <i class="fa fa-plus" />
              </div>
            </div>
          </div>

          <div
            id="collapsePayment"
            class="collapse"
            data-parent="#cartAccordion"
          >
            <div class="card-body">
              <PaymentGateway />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
