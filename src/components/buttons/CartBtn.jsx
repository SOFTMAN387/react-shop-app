import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/Store";
import { NavLink } from "react-router-dom";

const CartBtn = () => {
  const dispatch = useDispatch();
  // const state=useSelector((state)=>state.cart);
  const cartItem = useSelector((state) => state);
  const carItemRemove = (cartItem) => {
    dispatch(actions.removeToCart(cartItem));
  };

  // console.log(cartItem);
  return (
    <>
      <div>
        {cartItem.length == 0 ? (
          <>
            {" "}
            <div className="px-4 my-5 bg-light rounded-3">
              <div className="container py-4">
                <h3>Sorry !! Your Cart is Empty</h3>
                <p>Make Sure You'll add Items to Your wishList...</p>
                <NavLink to="/home" className="btn btn-outline-primary">
                  Back to HomePage
                </NavLink>
              </div>
            </div>
          </>
        ) : (
          cartItem.map((ele) => {
            return (
              <>
                <div className="px-4 my-5 bg-light rounded-3" key={ele.id}>
                  <div className="container py-4">
                    <button
                      className="btn-close float-end "
                      onClick={() => carItemRemove(ele)}
                      aria-label="close"
                    ></button>
                    <div className="row justify-content-center">
                      <div className="col-md-4">
                        <img
                          src={ele.img}
                          alt={ele.title}
                          style={{ height: "200px", width: "170px" }}
                        />
                      </div>
                      <div className="col-md-4">
                        <h3>{ele.title}</h3>
                        <p>
                          <span className="fw-bold m-1">₹</span>
                          {ele.price}
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
               
              </>
            );
          })
        )}
       
      </div>
      <div className="d-flex justify-content-center">
                    <NavLink
                  to="/checkOut"
                  className="btn btn-outline-primary w-50 "
                >
                  Proceed To Order
                </NavLink>
        </div>
    </>
  );

  //   const emptyCart =()=>{
  //     return(
  //         <>
  //            <div className="px-4 my-5 bg-light rounded-3 py-5" key={ele.id}>
  //            <div className="container py-4">
  //            <div className="row">
  //            <h3>Your Cart is Empty</h3>

  //            </div>

  //            </div>

  //             </div>
  //         </>
  //     )
  // }

  //   return(
  //       <>
  //           {cartItem.length===0 && emptyCart()}
  //           {cartItem.length!==0 && cartItem.map(ele)}
  //       </>
  //   )
};

export default CartBtn;
