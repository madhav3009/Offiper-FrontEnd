import React from "react";
import "./App.scss";
import Layout from "./hoc/layout/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Buckets from "./pages/buckets/buckets";
import Product from "./pages/product/product";
import Checkout from "./pages/checkout/checkout";
import Search from "./pages/search/search";
import ProductList from "./pages/productList/productList";

function App() {

 
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/search" exact component={Search} />
          <Route path="/buckets" exact component={Buckets} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/" exact component={Home} />
          <Route path="/checkout" exact component={Checkout} />

          <Route path="/:type" exact component={ProductList} />
          <Route path="/:type/:handle" exact component={Product} />
        </Switch>
        
       
      </Layout>
    </>
  );
}

export default App;
