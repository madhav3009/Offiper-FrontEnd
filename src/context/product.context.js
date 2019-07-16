import React from "react";
const ProductContext = React.createContext({
  productData: void 0,
  storeProductData: () => {}
});

export class ProductContextProvider extends React.Component {
  storeProductData = p => {
    this.setState({
      productData: p
    });
  };

  state = {
    productData: {},
    storeProductData: this.storeProductData
  };

  render() {
    return (
      <ProductContext.Provider value={this.state}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductContextConsumer = ProductContext.Consumer;
