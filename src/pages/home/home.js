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
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        }, {
          type: "stationary",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2013/07/13/09/51/pen-filler-156146_960_720.png",
          price: "500"
        }, {
          type: "stationary",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2017/03/21/20/16/leave-2163258_960_720.jpg",
          price: "500"
        }, {
          type: "stationary",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2019/01/27/19/05/filler-3958737_960_720.jpg",
          price: "500"
        },
        {
          type: "stationary",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2013/07/13/09/51/pen-filler-156146_960_720.png",
          price: "500"
        },
        {
          type: "hardware",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "hardware",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "hardware",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "hardware",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "hardware",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "hardware",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },

        {
          type: "stationary",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "events",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "events",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "events",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "events",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "events",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "events",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        
        {
          type: "stationary",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "cleansing",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "cleansing",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "cleansing",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "cleansing",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "cleansing",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "cleansing",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "cleansing",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        
        {
          type: "kitchen",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "kitchen",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },{
          type: "kitchen",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },{
          type: "kitchen",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },{
          type: "kitchen",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },{
          type: "kitchen",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },{
          type: "kitchen",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },{
          type: "kitchen",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "decor",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "decor",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },{
          type: "decor",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },{
          type: "decor",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },{
          type: "decor",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },{
          type: "decor",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },{
          type: "decor",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
          price: "500"
        },
        {
          type: "events",
          title: "pen",
          src:
            "https://cdn.pixabay.com/photo/2016/08/02/23/52/bag-1565402_960_720.jpg",
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
