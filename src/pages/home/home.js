import React, { Component } from "react";
import Itembanner from "../../components/itembanner/itemBanner";

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
      products: [
        {
          type: "stationary",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        }, {
          type: "stationary",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        }, {
          type: "stationary",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        }, {
          type: "stationary",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        },
        {
          type: "stationary",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        },
        {
          type: "hardware",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        },
        {
          type: "stationary",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        },
        {
          type: "events",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        },
        {
          type: "stationary",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        },
        {
          type: "cleansing",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        },
        {
          type: "kitchen",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        },
        {
          type: "decor",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        },
        {
          type: "events",
          title: "pen",
          src:
            "https://images.unsplash.com/photo-1510936994138-07e06c7c5add?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
          price: "500"
        }
      ]
    };
  }
  render() {
    const itemBanner = this.state.type.map(type => (
      <Itembanner
        type={type}
        products={this.state.products}
      />
    ));
    return <div>{itemBanner}</div>;
  }
}
