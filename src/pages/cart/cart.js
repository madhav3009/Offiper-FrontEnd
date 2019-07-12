import React, { useContext } from "react";
import { CartContextConsumer } from "../../context/cart.context";
import './cart.scss';

const Cart = props => {
	const { products } = useContext(CartContextConsumer);
	let pro = products.map(function(p) {
		return <li>{p.title}</li>;
	});
	return (
		<div>
			<div class="cartHead">
             <h3>Shopping Cart </h3>
			 <button >SUBTOTAL RS 2000</button>
			 <button >PROCEED TO PAY</button>
			 </div>
     
  
  
  
  <div class="d-flex bg-secondary "> 
   
    <div class="pl"><img src="https://images.unsplash.com/photo-1527597771870-8f1e06ff8d8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" style={{width:"150px",height:"auto",paddingRight:"15%"}}></img></div>
    
	<div class="pl"><span>Item Heading</span><br />InStock <br /><button>Add To Bucket</button></div>
    
	<div class="pleft"><span>Price</span><br />500<br /><strike>1000</strike> </div>
	<div class="plefty"><span>Quantity</span><br /><select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> </div>
	
	
	</div>
    

	<div class="d-flex bg-secondary "> 
   
   <div class="pl"><img src="https://images.unsplash.com/photo-1527597771870-8f1e06ff8d8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" style={{width:"150px",height:"auto",paddingRight:"15%"}}></img></div>
   
   <div class="pl"><span>Item Heading</span><br />InStock <br /><button>Add To Bucket</button></div>
   
   <div class="pleft"><span>Price</span><br />500<br /><strike>1000</strike> </div>
   <div class="plefty"><span>Quantity</span><br /><select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> </div>
   
   
   </div>
   

   <div class="d-flex bg-secondary "> 
   
   <div class="pl"><img src="https://images.unsplash.com/photo-1527597771870-8f1e06ff8d8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" style={{width:"150px",height:"auto",paddingRight:"15%"}}></img></div>
   
   <div class="pl"><span>Item Heading</span><br />InStock <br /><button>Add To Bucket</button></div>
   
   <div class="pleft"><span>Price</span><br />500<br /><strike>1000</strike> </div>
   <div class="plefty"><span>Quantity</span><br /><select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> </div>
   
   
   </div>
   
   <div class="d-flex bg-secondary "> 
   
   <div class="pl"><img src="https://images.unsplash.com/photo-1527597771870-8f1e06ff8d8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" style={{width:"150px",height:"auto",paddingRight:"15%"}}></img></div>
   
   <div class="pl"><span>Item Heading</span><br />InStock <br /><button>Add To Bucket</button></div>
   
   <div class="pleft"><span>Price</span><br />500<br /><strike>1000</strike> </div>
   <div class="plefty"><span>Quantity</span><br /><select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> </div>
   
   
   </div>
   
   <div class="d-flex bg-secondary "> 
   
   <div class="pl"><img src="https://images.unsplash.com/photo-1527597771870-8f1e06ff8d8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" style={{width:"150px",height:"auto",paddingRight:"15%"}}></img></div>
   
   <div class="pl"><span>Item Heading</span><br />InStock <br /><button>Add To Bucket</button></div>
   
   <div class="pleft"><span>Price</span><br />500<br /><strike>1000</strike> </div>
   <div class="plefty"><span>Quantity</span><br /><select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> </div>
   
   
   </div>
   

	
	
	</div>


	);
};

export default Cart;
