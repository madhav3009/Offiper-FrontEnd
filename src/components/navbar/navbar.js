import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import Login from '../accessModal/login/login'
import SignUp from '../accessModal/signUp/signup'
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
					data-target="#navbarSupportedContent">
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
								data-target=".navbar-collapse.show">
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
								data-target=".navbar-collapse.show">
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
								data-target=".navbar-collapse.show">
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
								data-target=".navbar-collapse.show">
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
								data-target=".navbar-collapse.show">
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
								data-target=".navbar-collapse.show">
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
								data-target=".navbar-collapse.show">
								<i class="fa fa-search " />
							</NavLink>
						</div>
						<div className="col-xl pt-2 pb-2">
							<NavLink
								to="/buckets"
								exact
								data-toggle="collapse"
								
								data-target=".navbar-collapse.show">
								<i class="fa fa-shopping-bag " />
							</NavLink>
						</div>
						<div className="col-xl pt-2 pb-2">
							<NavLink
								to="/cart"
								exact
								data-toggle="collapse"
								data-target=".navbar-collapse.show">
								<i class="fa fa-shopping-cart" />
							</NavLink>
						</div>
					</div>
					
				
<div className="row" id="navbar-sign-button">
<div className="col-xl pr-4 pt-2 pb-2 ">
  <button type="button"
  id="SignIn"
  data-toggle="modal"
  data-target="#SignInModal">SignIn</button>
  <div
  class="modal fade"
  id="SignInModal"
  tabindex="-1"
  role="dialog">
        <div
        class="modal-dialog "
        role="document">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title">Login</h5>
    <button style={{outline:"none"}}
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close">
        <span aria-hidden="true" style={{color:"#FF8888"}}>&times;</span>
    </button>
     </div>
<div class="modal-body">
<Login />
</div>
</div>
</div>
</div>
</div>


<div className="col-xl pr-4 pt-2 pb-2 ">
  <button type="button"
  id="SignUp"
  data-toggle="modal"
  data-target="#SignUpModal">SignUp</button>
  
  <div
  class="modal fade "
  id="SignUpModal"
  tabindex="-1"
  role="dialog">
        <div
        class="modal-dialog "
        role="document">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title">SignUp</h5>
    <button style={{outline:"none"}}
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close">
        <span aria-hidden="true" style={{color:"#FF8888"}}>&times;</span>
    </button>
     </div>
<div class="modal-body">
<SignUp />
</div>
</div>
</div>
</div>
</div>


					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;