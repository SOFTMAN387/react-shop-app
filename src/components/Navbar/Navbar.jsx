import React from 'react';
import { NavLink } from 'react-router-dom';
import "../style.css";
import Login from '../buttons/Login';
import SignUp from '../buttons/SignUp';
import Cart from '../buttons/Cart';


const Navbar = () => {
        return ( < >
            <nav className = "navbar navbar-expand-lg navbar-light bg-light" >
            <div className = "container-fluid" >

            <button className = "navbar-toggler"
            type = "button" data-bs-toggle="collapse"
            data-bs-target = "#navbarNav"
            aria-controls = "navbarNav"
            aria-expanded = "false"
            aria-label = "Toggle navigation">
            <span className = "navbar-toggler-icon " > </span></button> <div className = "collapse navbar-collapse"
            id = "navbarNav" >
            <ul className = "navbar-nav mb-2 my-2 mb-lg-0" >
            <li className = "nav-item" >
            <NavLink className = "nav-link active"
            aria-current = "page"
            to ="/home" > Home </NavLink></li> <li className = "nav-item" >
            <NavLink className = "nav-link active"
             aria-current = "page"
            to = "/product" > Product </NavLink> </li> <li className = "nav-item" >
            <NavLink className = "nav-link active"
            aria-current = "page"
            to = "/about" > About </NavLink> </li> <li className="nav-item" >
            <NavLink className = "nav-link active"
            aria-current = "page"
            to="/contact" > Contact </NavLink> </li>
             <li className="nav-item" >
            <span className = "nav-link active"
            aria-current = "page"
             >  <Login/> </span> </li>
             <li className="nav-item" >
            <span className = "nav-link active"
            aria-current = "page"
             >  <SignUp/></span> </li>
          

            </ul> </div> <NavLink className = "navbar-brand mx-center fw-bold"
            to = "#"> SOFT-MART</NavLink>
           
           
            <Cart/>

            </div>
            </nav>
             </>
             )
        }

        export default Navbar;