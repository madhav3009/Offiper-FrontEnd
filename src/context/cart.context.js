import React from "react";

const CartContext = React.createContext({
	products: void 0,
	addProductToCart: () => {}
});

export class CartContextProvider extends React.Component {
	addProductToCart = p => {
		this.setState({
			products: [...this.state.products, p]
		});
	};

	state = {
		products: [],
		addProductToCart: this.addProductToCart
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
