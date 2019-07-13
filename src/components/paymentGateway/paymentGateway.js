import React, { Component } from "react";

class PaymentGateway extends Component {
  constructor(props) {
    super(props);
    this.state={
     amount:null
    }
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }

  paymentHandler(e) {
    e.preventDefault();
    if(this.state.amount==null||this.state.amount==0){
     alert('Invalid amount')
     return false;
    }
   let options = {
    "key": "rzp_test_nFLJtzsCQBvxFp",
    "amount": this.state.amount,
    "currency": "INR",
    "name": "Offiper",
    "description": "Ordered Products",
    "image": "https://i.imgur.com/n5tjHFD.png",
    "handler": function (response) {
     alert(response.razorpay_payment_id);
    },
    "prefill": {
     "name": "Sarvottam",
     "email": "sarru1291@gmail.com"
    },
    "notes": {
     "address": "H2626 creative studio"
    },
    "theme": {
     "color": "#F37254"
    }
   };
    let rzp = new window.Razorpay(options);
    rzp.open();
    console.log(rzp);
  }

  render() {
    return (
      <div>
        <label htmlFor="pay_amount" className="pay_amount">
          Amount to be paid (in paise): 
        </label>
        <input type="text" onChange={(e)=>this.setAmount(e)}/>
        <button
          onClick={e => {
            this.setState({amount:e.target.value})
          }}
        >
          Pay Now
        </button>
      </div>
    );
  }
}
export default PaymentGateway;
