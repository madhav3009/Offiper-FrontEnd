import React, { Component, useState } from "react";
const LoginOtp = props => {

  
  return (
    <div>
		    <div>

      <label id="OTP">Enter OTP</label>
      <br />
      <input htmlFor="OTP" type="text" />
      <button id="otp">Verify OTP</button>
    </div>

      <p>New to Offiper ?</p>
      
      <button>SignUp</button>
    </div>
  );
};

export default LoginOtp;


