import React, { useState, useContext } from "react";
import "./product.scss";
import Quantity from "../../components/quantity/quantity";
import Data from "../../assets/config/setting_data.json";
import { CartContextConsumer } from "../../context/cart.context";

const Product = props => {
	const [addedToCart, setAddedToCart] = useState(false);
  const { products,addProductToCart } = useContext(CartContextConsumer);
  console.log(products.length);
	let addToCartText = Data.cart.addToCart;
	var showAlert = null;
  const urlB = props.match.url.split("/");
  var urlL = [];
  for (let i = 1; i < urlB.length - 1; i++) {
    const hreff = "/" + urlB[i];
    urlL = (
      <li class="breadcrumb-item">
        <a href={hreff}>{urlB[i]}</a>
      </li>
    );
  }
	let addToCartOnClick = () => {
		setAddedToCart(true);
		const p = { title: props.location.state.title };
		addProductToCart(p);
	};

	if (addedToCart) {
		addToCartText = Data.cart.viewCart;
		addToCartOnClick = () => {
			props.history.push("/cart");
		};
		var viewCartStyle = {
			backgroundColor: "rgb(247, 183, 183)",
			color: "white"
		};
		showAlert = (
			<div class="alert alert-dark" role="alert">
				Product added to cart.
			</div>
		);
	}
	return (
		<div>
			<div class="breadcrumb-box">
				<ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            {urlL}
            <li class="breadcrumb-item active" aria-current="page">
              {urlB[urlB.length - 1]}
            </li>
				</ol>
			</div>

			<div class="container temp ">
				<div class="row">
					<div class="col-lg-7">
						<img
							id="productImg"
							src={props.location.state.src}
							alt=""
							style={{ width: "100%", padding: "0px" }}
						/>
					</div>
					<div class="col-lg-5">
						<div class="productTitle">
							<p> Pen </p>
						</div>
						<div class="productDesc">
							<p>
								Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsuma
								Lorem IpsumLorem Ipsuma Lorem IpsumLorem Ipsuma Lorem IpsumLorem
								Ipsuma IpsumLorem IpsumLore
							</p>
						</div>
						<div id="discPrice">
							<strike>Rs 1000</strike>
						</div>
						<div id="origPrice">
							<p>Rs 500</p>
						</div>
						<Quantity />
						<div class="row add">
							<div class="col-lg-6">
								<button
									type="button"
									id="bucketAdd"
									data-toggle="modal"
									data-target="#addToBucketModal">
									{Data.cart.addToBucket}
								</button>
								<div
									class="toast"
									role="alert"
									aria-live="assertive"
									aria-atomic="true"
								/>
								{/* Modal */}
								<div
									class="modal fade"
									id="addToBucketModal"
									tabindex="-1"
									role="dialog">
									<div
										class="modal-dialog modal-dialog-centered"
										role="document">
										<div class="modal-content">
											<div class="modal-header">
												<h5 class="modal-title">Buckets</h5>
												<button
													type="button"
													class="close"
													data-dismiss="modal"
													aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div class="modal-body">
												<ul class="list-group list-group-flush">
													<li class="list-group-item">
														<input type="checkbox" /> Cras justo odio{" "}
														<span class="badge badge-dark">3</span>
													</li>
													<li class="list-group-item">
														<input type="checkbox" /> Dapibus ac facilisis in
														<span class="badge badge-dark">3</span>
													</li>
													<li class="list-group-item">
														<input type="checkbox" /> Morbi leo risus{" "}
														<span class="badge badge-dark">3</span>
													</li>
													<li class="list-group-item">
														<input type="checkbox" /> Porta ac consectetur ac{" "}
														<span class="badge badge-dark">3</span>
													</li>
													<li class="list-group-item">
														<input type="checkbox" /> Vestibulum at eros{" "}
														<span class="badge badge-dark">3</span>
													</li>
												</ul>
												<hr />
												<small class="text-muted">Create New Bucket</small>
												<div class="input-group">
													<input type="text" class="form-control" />
													<div class="input-group-append">
														<span class="input-group-text">
															<i class="fa fa-plus" />
														</span>
													</div>
												</div>
											</div>
											<div class="modal-footer">
												<button
													type="button"
													class="btn btn-secondary"
													data-dismiss="modal">
													Close
												</button>
												<button type="button" class="btn btn-primary">
													Save
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-6">
								<button
									type="button"
									id="cartAdd"
									onClick={addToCartOnClick}
									style={viewCartStyle}>
									{addToCartText}
								</button>

								{showAlert}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
