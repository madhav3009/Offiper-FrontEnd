import React, { Component } from "react";
import "./signup.scss";
const SignUp = props => {
  return (
    <div>
      <label class="inputs">Full Name</label>
      <br />
      <input type="text" /><br />

      <label class="inputs">Email/Phone number</label>
      <br />
      <input type="text" />
      <br />

      <label class="inputs">Password</label>
      <br />
      <input type="text" />

      <button>Continue</button>
      <p>Already a Offiper member ?</p>
      <button>Login</button>
    </div>
  );
};

export default SignUp;
