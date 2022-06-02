import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Cart = () => {
    const cart_leng = useSelector((state)=>state.length)
  return (
    <>
      <NavLink to="/cartBtn" className="btn btn-outline-primary">
        <span className="fa fa-shopping-cart me-1 "><sup><span className="badge badge-dark fw-bold bg-success mx-1">{cart_leng}</span></sup></span>
      </NavLink>
    </>
  );
};

export default Cart;
