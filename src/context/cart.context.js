import React from "react";

const CartContext = React.createContext({
  products: void 0,
  addProductToCart: () => {},
  removeProductFromCart:()=>{}
});

export class CartContextProvider extends React.Component {
  addProductToCart = p => {
    this.setState({
      products: [...this.state.products, p]
	});
	console.log(this.products);
	
  };
  removeProductFromCart = p => {
	  alert('You want to remove the product');
    // let newProducts = this.products.filter(p => p.title != p);
    // this.products = newProducts;
  };
  state = {
    products: [],
    addProductToCart: this.addProductToCart,
    removeProductFromCart: this.removeProductFromCart
  };

  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export const CartContextConsumer = CartContext.Consumer;
