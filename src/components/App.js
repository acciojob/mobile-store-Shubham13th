
import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import ProductDetails from "../pages/ProductDetails";
import AdminPanel from "../pages/AdminPanel";
import productData from "../data/productData";

const App = () => {
  const [products, setProducts] = useState(productData);

  const updateProductPrice = (id, newPrice) => {
    setProducts(products.map((p) => 
      p.id === id ? { ...p, price: newPrice } : p
    ));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const addProduct = (newProduct) => {
    const product = {
      ...newProduct,
      id: Math.max(...products.map(p => p.id), 0) + 1,
      price: Number(newProduct.price)
    };
    setProducts([...products, product]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <ProductCard products={products} />} />
        <Route path="/products/:id" render={() => <ProductDetails products={products} updateProductPrice={updateProductPrice} />} />
        <Route path="/admin" render={() => <AdminPanel products={products} setProducts={setProducts} deleteProduct={deleteProduct} addProduct={addProduct} />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
