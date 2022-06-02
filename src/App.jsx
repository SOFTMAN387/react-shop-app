// import React from 'react'
//import "./components/style.css";
//import { useSelector,useDispatch } from 'react-redux';
//import { incNumber,decNumber } from './redux/action/action';
//import {actions} from './store';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutUs from "./components/About/AboutUs";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./components/footer/Footer";
import Product from "./components/products/Product";
import ProductDetails from "./components/products/ProductDetails";
import CartBtn from "./components/buttons/CartBtn";
import Order from "./components/buttons/Order";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />{" "}
        <Route exact path="/about" element={<AboutUs />} />{" "}
        <Route exact path="/contact" element={<ContactUs />} />{" "}
        <Route exact path="/product" element={<Product />} />{" "}
        <Route exact path="/product_details/:id" element={<ProductDetails />} />
        <Route exact path="/CartBtn" element={<CartBtn />} />
        <Route exact path="/checkOut" element={<Order />} />
        <Route exact path="/*" element={<Home />} />
      </Routes>{" "}
      <Footer />
    </>
  );
};

export default App;
