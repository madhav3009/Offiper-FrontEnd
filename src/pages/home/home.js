import React, { Component } from "react";
import Itembanner from "../../components/itembanner/itemBanner";
import Products from '../../assets/config/products.json';
import OfferBanner from '../../components/offerbanner/offerbanner'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [
        "stationary",
        "hardware",
        "decor",
        "events",
        "cleansing",
        "kitchen"
      ],
      products: Products
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const itemBanner = this.state.type.map(type => (
      
      <Itembanner
        type={type}
        products={this.state.products}
      />
    ));
    return <div class="Home">
    <OfferBanner />
    {itemBanner} 
    </div>;
  }
}
