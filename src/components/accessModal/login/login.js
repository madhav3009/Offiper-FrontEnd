import React, { Component, useState } from "react";
import "./login.scss";
const Login = props => {

  
  return (
    <div>
		    <div>
      <div class="d-flex justify-content-center ">
        <div
          class="g-signin2 m-3"
          data-onsuccess="onSignIn"
          data-theme="dark"
        />
        <div
          class="g-signin2 m-3"
          data-onsuccess="onSignIn"
          data-theme="dark"
        />
      </div>
      <br />
      <h3>OR</h3>
      <br />
      <label id="email">Email/Phone number</label>
      <br />
      <input htmlFor="email" type="text" />
      <button id="otp">Send OTP</button>
    </div>

      <p>New to Offiper ?</p>
      
      <button>SignUp</button>
    </div>
  );
};

export default Login;


