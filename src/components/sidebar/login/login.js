import React, { Component, useState } from "react";
import "./login.scss";
const Login = props => {

  
  return (
    <div>
		    <div>
      <div class="d-flex justify-content-center ">
      <div class="g-signin2" data-onsuccess="onSignIn" ></div>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
      </div>

      <br />
      <h4>Or</h4>
      
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


