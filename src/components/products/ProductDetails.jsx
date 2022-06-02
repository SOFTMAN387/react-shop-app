import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../api/ProductsApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/Store";

const ProductDetails = () => {
  const product_id = useParams().id;
  const dispatch=useDispatch();
  //console.log(product_id);
  const product_details = Product.filter((x) => x.id == product_id);
  const [cartButton, setCartButton] = useState("Add to Cart");
  const cartBtn = (item) => {
    if (cartButton === "Add to Cart") {
      dispatch(actions.addToCart(item));
     
      setCartButton("Remove Cart Item");
    } else {
      dispatch(actions.removeToCart(item));
      setCartButton("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        {product_details.map((item) => {
          return (
            <>
              <div className="row ">
                <div
                  className="col-md-6 d-flex justify-content-center mx-auto "
                  id="p_details_img"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ height: "300px", width: "500px" }}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center my-2 mx-auto">
                  <h2>{item.title}</h2>
                  <hr />
                  <h3>
                    
                    <span className="fw-bold m-1">₹</span>
                    {item.price}
                  </h3>
                  <p>{item.desc}</p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => cartBtn(item)}
                  >{cartButton}</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductDetails;
