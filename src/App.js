import React from "react";
import "./App.scss";
import Layout from "./hoc/layout/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Stationary from "./pages/stationary/stationary";
import Hardware from "./pages/hardware/hardware";
import Decor from "./pages/decor/decor";
import Events from "./pages/events/events";
import Kitchen from "./pages/kitchen/kitchen";
import Cleansing from "./pages/cleansing/cleansing";
import Cart from "./pages/cart/cart";
import Buckets from "./pages/buckets/buckets";
import Product from './pages/product/product';
import Checkout from './pages/checkout/checkout';
// import Search from './pages/search/search';

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/stationary" exact component={Stationary} />
          <Route path="/hardware" exact component={Hardware} />
          <Route path="/decor" exact component={Decor} />
          <Route path="/events" exact component={Events} />
          <Route path="/kitchen" exact component={Kitchen} />
          <Route path="/cleansing" exact component={Cleansing} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/buckets" exact component={Buckets} />
          <Route path="/checkout" exact component={Checkout} />
          
          {/* <Route path="/search" exact component={Search} /> */}
          <Route path="/" exact component={Home} />

          <Route path="/:type/:productTitle" exact component={Product}/>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
