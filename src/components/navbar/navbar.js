import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <header>
      <nav class="navbar navbar-expand-xl fixed-top navbar-dark bg-dark">
        <NavLink to="/" exact className="navbar-brand">
          Offiper
        </NavLink>
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
              <NavLink to="/stationary" exact className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
                Stationary
              </NavLink>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <NavLink to="/hardware" exact className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
                Hardware
              </NavLink>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <NavLink to="/decor" exact className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
                Decor
              </NavLink>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <NavLink to="/events" exact className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
                Events
              </NavLink>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <NavLink to="/cleansing" exact className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
                Cleansing
              </NavLink>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <NavLink to="/kitchen" exact className="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
                Kitchen
              </NavLink>
            </li>
          </ul>

          <div class="row" id="navbar-icon">
            <div className="col-xl pt-2 pb-2">
              <i class="fa fa-search" />
            </div>
            <div className="col-xl pt-2 pb-2">
              <NavLink to="/buckets" exact data-toggle="collapse" data-target=".navbar-collapse.show">
                <i class="fa fa-shopping-bag " />
              </NavLink>
            </div>
            <div className="col-xl pt-2 pb-2">
              <NavLink to="/cart" exact data-toggle="collapse" data-target=".navbar-collapse.show">
                <i class="fa fa-shopping-cart" />
              </NavLink>
            </div>
          </div>
          <div className="row" id="navbar-sign-button">
            <div className="col-xl pr-4 pt-2 pb-2 ">
              <a href="" data-toggle="collapse" data-target=".navbar-collapse.show">SignIn</a>
            </div>
            <div className="col-xl pr-4 pt-2 pb-2">
              <a href="" data-toggle="collapse" data-target=".navbar-collapse.show">SignUp</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
