import React from "react";
import './login.scss';
import InputField from '../inputField/inputField';

const Login = props => {
  return (
    <div class="login">
      <p>Enter login details or <a href="">create an account</a></p>
      <InputField lable="OTP"/>
      <br />
      <button>Verify OTP</button>
    </div>
  );
};
export default Login;
