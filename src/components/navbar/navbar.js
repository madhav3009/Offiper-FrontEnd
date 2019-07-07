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
            <li class="nav-item active pt-2 pb-2">
              <a class="nav-link" href="#">
                Stationary
              </a>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <a class="nav-link" href="#">
                Hardware
              </a>
            </li>
            <li class="nav-item active pt-2 pb-2">

              <a class="nav-link" href="#">
                Decor
              </a>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <a class="nav-link" href="#">
                Events
              </a>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <a class="nav-link" href="#">
                Cleansing
              </a>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <a class="nav-link" href="#">
                Kitchen
              </a>
            </li>
          </ul>
          <div class="row" id="navbar-icon">
            <div className="col-xl pt-2 pb-2">
              <i class="fa fa-search" />
            </div>
            <div className="col-xl pt-2 pb-2">
              <i class="fa fa-shopping-bag " />
            </div>
            <div className="col-xl pt-2 pb-2">
              <i class="fa fa-shopping-cart" />
            </div>
          </div>
          <div className="row" id="navbar-sign-button">
            <div className="col-xl pr-4 pt-2 pb-2 ">
              <a href="">SignIn</a>
            </div>
            <div className="col-xl pr-4 pt-2 pb-2">
              <a href="">SignUp</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
