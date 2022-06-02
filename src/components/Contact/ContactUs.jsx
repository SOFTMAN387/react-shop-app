import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 my-5">
            <h2> Have Some Questions. ? ? </h2> <hr />
          </div>{" "}
        </div>{" "}
        <div className="row">
          <div className="col-md-5">
            <img
              src="/images/i-phone/contact.png "
              style={{ height: "300px", width: "300px" }}
              alt="Contact Us"
            />
          </div>
          <div className="col-md-6">
            <form className="mt-2" action="">
              <div class="mb-3">
                <label for="exampleFormControl" class="form-label">
                  Full Name{" "}
                </label>{" "}
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Name"
                />
              </div>{" "}
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address{" "}
                </label>{" "}
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>{" "}
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Write Msg Here!
                </label>{" "}
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>{" "}
              <button className="btn-outline-primary mt-2">
                {" "}
                Send Message{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default ContactUs;
