import React from "react";
import "./login.scss";
import GoogleLogin from "react-google-login";

const Login = props => {
  const responseGoogle = response => {
    console.log(response);
  };

  return (
    <div class="login">
      <div>
        <div >
          <GoogleLogin
            clientId="96873623669-4qtau9vk30798fhijoo9rc44odb8j0un.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
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
