import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <NavLink
                className="text-dark"
                to="#"
              >
                FAQs
              </NavLink>
              <span className="text-muted px-2">|</span>
              <NavLink
                className="text-dark"
                to="#"
              >
                Help
              </NavLink>
              <span className="text-muted px-2">|</span>
              <NavLink
                className="text-dark"
                to="#"
              >
                Support
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <NavLink
                className="text-dark px-2"
                to="#"
              >
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink
                className="text-dark px-2"
                to="#"
              >
                <i className="fab fa-twitter"></i>
              </NavLink>
              <NavLink
                className="text-dark px-2"
                to="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </NavLink>
              <NavLink
                className="text-dark px-2"
                to="#"
              >
                <i className="fab fa-instagram"></i>
              </NavLink>
              <NavLink
                className="text-dark pl-2"
                to="#"
              >
                <i className="fab fa-youtube"></i>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <NavLink
              to="#"
              className="text-decoration-none"
            >
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </NavLink>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="#">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <NavLink
              to="#"
              className="btn border"
            >
              <i className="fas fa-heart text-primary"></i>
              <span className="badge">0</span>
            </NavLink>
            <NavLink
              to="#"
              className="btn border"
            >
              <i className="fas fa-shopping-cart text-primary"></i>
              <span className="badge">0</span>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <NavLink
              className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
              data-toggle="collapse"
              to="#navbar-vertical"
              style={{ height: "65px", marginTop: "-1px", padding: "0 30px" }}
            >
              <h6 className="m-0">Categories</h6>
              <i className="fa fa-angle-down text-dark"></i>
            </NavLink>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: "1" }}
            >
              <div
                className="navbar-nav w-100 overflow-hidden"
                style={{ height: "410px" }}
              >
                <div className="nav-item dropdown">
                  <NavLink
                    to="#"
                    className="nav-link"
                    data-toggle="dropdown"
                  >
                    Dresses{" "}
                    <i className="fa fa-angle-down float-right mt-1"></i>
                  </NavLink>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <NavLink
                      to="#"
                      className="dropdown-item"
                    >
                      Men's Dresses
                    </NavLink>
                    <NavLink
                      to="#"
                      className="dropdown-item"
                    >
                      Women's Dresses
                    </NavLink>
                    <NavLink
                      to="#"
                      className="dropdown-item"
                    >
                      Baby's Dresses
                    </NavLink>
                  </div>
                </div>
                <NavLink
                  to="#"
                  className="nav-item nav-link"
                >
                  Shirts
                </NavLink>
                <NavLink
                  to="#"
                  className="nav-item nav-link"
                >
                  Jeans
                </NavLink>
                <NavLink
                  to="#"
                  className="nav-item nav-link"
                >
                  Swimwear
                </NavLink>
                <NavLink
                  to="#"
                  className="nav-item nav-link"
                >
                  Sleepwear
                </NavLink>
                <NavLink
                  to="#"
                  className="nav-item nav-link"
                >
                  Sportswear
                </NavLink>
                <NavLink
                  to="#"
                  className="nav-item nav-link"
                >
                  Jumpsuits
                </NavLink>
                <NavLink
                  to="#"
                  className="nav-item nav-link"
                >
                  Blazers
                </NavLink>
                <NavLink
                  to="#"
                  className="nav-item nav-link"
                >
                  Jackets
                </NavLink>
                <NavLink
                  to="#"
                  className="nav-item nav-link"
                >
                  Shoes
                </NavLink>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <NavLink
                to="#"
                className="text-decoration-none d-block d-lg-none"
              >
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  Shopper
                </h1>
              </NavLink>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <NavLink
                    to="/"
                    className="nav-item nav-link"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="shop"
                    className="nav-item nav-link"
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    to="detail"
                    className="nav-item nav-link"
                  >
                    Shop Detail
                  </NavLink>
                  <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages
                    </NavLink>
                    <div className="dropdown-menu rounded-0 m-0">
                      <NavLink
                        to="cart.html"
                        className="dropdown-item"
                      >
                        Shopping Cart
                      </NavLink>
                      <NavLink
                        to="checkout.html"
                        className="dropdown-item"
                      >
                        Checkout
                      </NavLink>
                    </div>
                  </div>
                  <NavLink
                    to="contact"
                    className="nav-item nav-link "
                  >
                    Contact
                  </NavLink>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <NavLink
                    to="#"
                    className="nav-item nav-link"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="#"
                    className="nav-item nav-link"
                  >
                    Register
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
