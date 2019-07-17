import React from "react";
import Logo from "../../assets/images/logo.png"; 
import footerImg from '../../assets/images/footer.png'
import "./footer.scss";
const Footer = props => {
  return (
    <footer>
      <div class="container-fluid">
        <img src={footerImg} style={{ width: "50%" }} />
        <img src={footerImg} style={{ width: "50%" }} />
        <div class="row">
          <div class="col-sm-4 ">
            <img
              src={Logo}
              class="img-fluid"
              id="Logo"
              style={{ width: "40vh",paddingTop:"5vh" }}
            />
          </div>

          <div class="col-sm-4">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Help</li>
            </ul>
          </div>

          <div class="col-sm-4">
            <ul>
              <li>Policy</li>
              <li>Terms</li>
              <li>Clients</li>
              <li>Read Our Blog</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <p>All Rights Reserved © 2019 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
