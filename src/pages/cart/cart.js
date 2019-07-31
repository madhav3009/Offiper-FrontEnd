import React, { useContext } from "react";
import { CartContextConsumer } from "../../context/cart.context";
import './cart.scss';
import {NavLink} from "react-router-dom";
import  $ from 'jquery';

const Cart = props => {
	const { products,removeProductFromCart } = useContext(CartContextConsumer);
	console.log(products)
	let pro = products.map(function(p) {
		return <li style={{listStyleType:"none"}}>  

		<div class="CartItem"> 
		  <button class="close" onClick={()=>{removeProductFromCart(p.title)}} >X</button>
		  <div class="d-flex bg-secondary "> 
		  <div class="pl"><img id="itemInCartImg"src={p.src} ></img></div>
		  <div class="pl"><span>{p.title}</span><br />InStock <br /><button style={{marginTop:"10%"}}>Add To Bucket</button></div>
		  <div class="pleft"><span>Price</span><br />{p.price}<br /><strike>1000</strike> </div>
		  <div class="plefty"><span>Quantity</span><br /><select id="qtySel"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> </div>
		 </div>
		</div></li>;
	});
	return (
		<div>
			 
			<div class="cartHead">
            <h3>Shopping Cart </h3>
			 <button style={{cursor:"default"}}>SUBTOTAL RS 2000</button>
			 <NavLink to="/checkout" exact>
			 <button >PROCEED TO PAY</button>
			 </NavLink>
		</div>
{pro}
</div>
	
	);
};

export default Cart;
