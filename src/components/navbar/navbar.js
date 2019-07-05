import React from "react";
import "./navbar.scss";

const Navbar = props => {
  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
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
            <li class="nav-item active pad">
              <a class="nav-link" href="#">
                Stationary
              </a>
            </li>
            <li class="nav-item active pad">
              <a class="nav-link" href="#">
                Hardware
              </a>
            </li>
            <li class="nav-item active pad">
              <a class="nav-link" href="#">
                Decor
              </a>
            </li>
            <li class="nav-item active pad">
              <a class="nav-link" href="#">
                Events
              </a>
            </li>
            <li class="nav-item active pad">
              <a class="nav-link" href="#">
                Cleansing
              </a>
            </li>
            <li class="nav-item active pad">
              <a class="nav-link" href="#">
                Kitchen
              </a>
            </li>
            <li class="nav-item dropdown pad">
              <a
                class="nav-link dropdown-toggle active"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider" />
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <div class="d-flex" id="navbar-icon">
            <i class="fa fa-search" />
            <i class="fa fa-shopping-bag " />
            <i class="fa fa-shopping-cart" />
          </div>
          <div className="d-flex" id="navbar-sign-button">
            <div >signin</div>
            <div >signup</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
