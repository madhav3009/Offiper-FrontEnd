import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import topLogo from "../../assets/images/toplogo.png";

const Navbar = props => {
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState("hu");
  var modal = null;
  if (open) {
    modal = (
      <Sidebar
        close={() => {
          setOpen(false);
        }}
        option={option}
      />
    );
  }

  function openSidebar(e) {
    let option = e.target.id;
    console.log(e.target);

    console.log(option);

    setOpen(true);
    setOption(option);
  }
  return (
    <header>
      {modal}
      <nav class="navbar navbar-expand-xl fixed-top navbar-dark bg-dark">
        <NavLink to="/" exact className="navbar-brand">
          Offi<span id="per">per</span>
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
              <NavLink
                to="/stationary"
                exact
                className="nav-link"
                activeClassName="activeNavColor"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Stationary
              </NavLink>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <NavLink
                to="/hardware"
                exact
                className="nav-link"
                activeClassName="activeNavColor"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Hardware
              </NavLink>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <NavLink
                to="/decor"
                exact
                className="nav-link"
                activeClassName="activeNavColor"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Decor
              </NavLink>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <NavLink
                to="/events"
                exact
                className="nav-link"
                activeClassName="activeNavColor"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Events
              </NavLink>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <NavLink
                to="/cleansing"
                exact
                className="nav-link"
                activeClassName="activeNavColor"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Cleansing
              </NavLink>
            </li>
            <li class="nav-item active pt-2 pb-2">
              <NavLink
                to="/kitchen"
                exact
                className="nav-link"
                activeClassName="activeNavColor"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Kitchen
              </NavLink>
            </li>
          </ul>

          <div class="row" id="navbar-icon">
            <div className="col-xl pt-2 pb-2">
              <NavLink
                to="/search"
                exact
                activeClassName="activeNavColor"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <i class="fa fa-search " />
              </NavLink>
            </div>
            <div className="col-xl pt-2 pb-2">
              <NavLink
                to="/buckets"
                exact
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <i class="fa fa-shopping-bag " />
              </NavLink>
            </div>
            <div className="col-xl pt-2 pb-2">
              <NavLink
                to="/cart"
                exact
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <i class="fa fa-shopping-cart" />
              </NavLink>
            </div>
          </div>

          <div className="row" id="navbar-sign-button">
            <div className="col-xl pr-4 pt-2 pb-2 ">
              <button
                type="button"
                id="LogIn"
                onClick={e => {
                  openSidebar(e);
                }}
              >
                LogIn
              </button>
            </div>

            <div className="col-xl pr-4 pt-2 pb-2 ">
              <button
                type="button"
                id="SignUp"
                onClick={e => {
                  openSidebar(e);
                }}
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
