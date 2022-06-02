import React from "react";
import Data from "../../api/ProductsApi";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12  text-center">
            <h1>Products.</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row  justify-content-around">
          {Data.map((item) => {
            const item_id = item.id;
            return (
              <>
                <div className="col-sm-6 col-lg-4">
                  <div className="card my-2 card-img">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.title}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title text-center">{item.title}</h5>

                      <h5 className="card-tex text-centert">
                        <span className="fw-bold m-1">₹</span>
                        {item.price}
                      </h5>
                      <Link
                        to={`/product_details/${item_id}`}
                        class="btn btn-outline-primary"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
