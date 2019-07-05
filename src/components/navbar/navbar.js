import React from "react";
import "./navbar.scss";

const Navbar = props => {
  return (
    <header>
      <nav class="navbar navbar-expand-xl sticky-top navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Offiper
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Stationary
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Hardware
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Decor
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Events
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Cleansing
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Kitchen
              </a>
            </li>
            
          </ul>
          <div class="d-flex" id="navbar-icon">
            <i class="fa fa-search" />
            <i class="fa fa-shopping-bag " />
            <i class="fa fa-shopping-cart" />
          </div>
          <div className="d-flex" id="navbar-sign-button">
            <div >SignIn</div>&nbsp;
            <div >SignUp</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
