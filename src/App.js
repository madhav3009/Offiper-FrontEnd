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

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/stationary" exact component={Stationary} />
          <Route path="/hardware" exact component={Hardware} />
          <Route path="/decor" exact component={Decor} />
          <Route path="/Events" exact component={Events} />
          <Route path="/Kitchen" exact component={Kitchen} />
          <Route path="/Cleansing" exact component={Cleansing} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/Buckets" exact component={Buckets} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
