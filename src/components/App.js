
import React from "react";
import './../styles/App.css';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import ProductDetails from "../pages/ProductDetails";
import AdminPanel from "../pages/AdminPanel";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductCard} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/admin" component={AdminPanel} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
