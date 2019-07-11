import React, { useContext } from "react";
import { CartContextConsumer } from "../../context/cart.context";

const Cart = props => {
	const { products } = useContext(CartContextConsumer);
	let pro = products.map(function(p) {
		return <li>{p.title}</li>;
	});
	return (
		<div>
			<ul>{pro}</ul>
		</div>
	);
};

export default Cart;
