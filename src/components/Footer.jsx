import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <h1>Rembo</h1>
      <div clasName="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div clasName="row px-xl-5 pt-5">
          <div clasName="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <NavLink
              to="*"
              clasName="text-decoration-none"
            >
              <h1 clasName="mb-4 display-5 font-weight-semi-bold">
                <span clasName="text-primary font-weight-bold border border-white px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </NavLink>
            <p>
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum
              no sit erat lorem et magna ipsum dolore amet erat.
            </p>
            <p clasName="mb-2">
              <i clasName="fa fa-map-marker-alt text-primary mr-3"></i>123
              Street, New York, USA
            </p>
            <p clasName="mb-2">
              <i clasName="fa fa-envelope text-primary mr-3"></i>
              info@example.com
            </p>
            <p clasName="mb-0">
              <i clasName="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890
            </p>
          </div>
          <div clasName="col-lg-8 col-md-12">
            <div clasName="row">
              <div clasName="col-md-4 mb-5">
                <h5 clasName="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div clasName="d-flex flex-column justify-content-start">
                  <NavLink
                    clasName="text-dark mb-2"
                    to="index.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Home
                  </NavLink>
                  <NavLink
                    clasName="text-dark mb-2"
                    to="shop.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Our Shop
                  </NavLink>
                  <NavLink
                    clasName="text-dark mb-2"
                    to="detail.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Shop Detail
                  </NavLink>
                  <NavLink
                    clasName="text-dark mb-2"
                    to="cart.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Shopping Cart
                  </NavLink>
                  <NavLink
                    clasName="text-dark mb-2"
                    to="checkout.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Checkout
                  </NavLink>
                  <NavLink
                    clasName="text-dark"
                    to="contact.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Contact Us
                  </NavLink>
                </div>
              </div>
              <div clasName="col-md-4 mb-5">
                <h5 clasName="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div clasName="d-flex flex-column justify-content-start">
                  <NavLink
                    clasName="text-dark mb-2"
                    to="index.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Home
                  </NavLink>
                  <NavLink
                    clasName="text-dark mb-2"
                    to="shop.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Our Shop
                  </NavLink>
                  <NavLink
                    clasName="text-dark mb-2"
                    to="detail.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Shop Detail
                  </NavLink>
                  <NavLink
                    clasName="text-dark mb-2"
                    to="cart.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Shopping Cart
                  </NavLink>
                  <NavLink
                    clasName="text-dark mb-2"
                    to="checkout.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Checkout
                  </NavLink>
                  <NavLink
                    clasName="text-dark"
                    to="contact.html"
                  >
                    <i clasName="fa fa-angle-right mr-2"></i>Contact Us
                  </NavLink>
                </div>
              </div>
              <div clasName="col-md-4 mb-5">
                <h5 clasName="font-weight-bold text-dark mb-4">Newsletter</h5>
                <form action="">
                  <div clasName="form-group">
                    <input
                      type="text"
                      clasName="form-control border-0 py-4"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div clasName="form-group">
                    <input
                      type="email"
                      clasName="form-control border-0 py-4"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div>
                    <button
                      clasName="btn btn-primary btn-block border-0 py-3"
                      type="submit"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div clasName="row border-top border-light mx-xl-5 py-4">
          <div clasName="col-md-6 px-xl-0">
            <p clasName="mb-md-0 text-center text-md-left text-dark">
              &copy;{" "}
              <NavLink
                clasName="text-dark font-weight-semi-bold"
                to="#"
              >
                Your Site Name
              </NavLink>
              . All Rights Reserved. Designed by
              <NavLink
                clasName="text-dark font-weight-semi-bold"
                to="https://htmlcodex.com"
              >
                HTML Codex
              </NavLink>
            </p>
          </div>
          <div clasName="col-md-6 px-xl-0 text-center text-md-right">
            <img
              clasName="img-fluid"
              src="img/payments.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
