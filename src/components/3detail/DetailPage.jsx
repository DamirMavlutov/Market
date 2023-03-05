import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RadioButton from "./RadioButton";

const DEFAULT_PHOTO =
  "https://images.unsplash.com/photo-1672310035534-7f48cfb23164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";
const DetailPage = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    fetch(`https://63db6d43a3ac95cec5a16e6c.mockapi.io/api/v1/cloth/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [id]);

  console.log("id", id);
  console.log("data", data);
  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Shop Detail
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <Link to="/">Home</Link>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop Detail</p>
          </div>
        </div>
      </div>

      {data && (
        <div className="container-fluid py-5">
          <div className="row px-xl-5">
            <div className="col-lg-5 pb-5">
              <div
                id="product-carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner border">
                  <div className="carousel-item active">
                    <img
                      className="w-100 h-100"
                      src={data.photos[0] || DEFAULT_PHOTO}
                      alt=""
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 h-100"
                      src=""
                      alt=""
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 h-100"
                      src="img/product-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="w-100 h-100"
                      src="img/product-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <Link
                  className="carousel-control-prev"
                  to="#product-carousel"
                  data-slide="prev"
                >
                  <i className="fa fa-2x fa-angle-left text-dark"></i>
                </Link>
                <Link
                  className="carousel-control-next"
                  to="#product-carousel"
                  data-slide="next"
                >
                  <i className="fa fa-2x fa-angle-right text-dark"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-7 pb-5">
              <h3 className="font-weight-semi-bold">{data.name}</h3>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star"></small>
                  <small className="fas fa-star-half-alt"></small>
                  <small className="far fa-star"></small>
                </div>
                <small className="pt-1">(50 Reviews)</small>
              </div>
              <h3 className="font-weight-semi-bold mb-4">{data.price}</h3>
              <p className="mb-4">{data.description}</p>
              <div className="d-flex mb-3">
                <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                <form>
                  {data.sizes.map((el) => (
                    <RadioButton
                      id={el}
                      label={el.toUpperCase()}
                    />
                  ))}
                </form>
              </div>
              <div className="d-flex mb-4">
                <p className="text-dark font-weight-medium mb-0 mr-3">
                  Colors:
                </p>
                <form>
                  {data.colors.map((el) => (
                    <RadioButton
                      id={el}
                      label={el[0].toUpperCase() + el.substring(1)}
                    />
                  ))}
                </form>
              </div>
              <div className="d-flex align-items-center mb-4 pt-2">
                <div
                  className="input-group quantity mr-3"
                  style={{ width: "130px" }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-minus">
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-secondary text-center"
                    value="1"
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-plus">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <button className="btn btn-primary px-3">
                  <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                </button>
              </div>
              <div className="d-flex pt-2">
                <p className="text-dark font-weight-medium mb-0 mr-2">
                  Share on:
                </p>
                <div className="d-inline-flex">
                  <Link
                    className="text-dark px-2"
                    to=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    className="text-dark px-2"
                    to=""
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    className="text-dark px-2"
                    to=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link
                    className="text-dark px-2"
                    to=""
                  >
                    <i className="fab fa-pinterest"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-xl-5">
            <div className="col">
              <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                <Link
                  className="nav-item nav-link active"
                  data-toggle="tab"
                  to="#tab-pane-1"
                >
                  Description
                </Link>
                <Link
                  className="nav-item nav-link"
                  data-toggle="tab"
                  to="#tab-pane-2"
                >
                  Information
                </Link>
                <Link
                  className="nav-item nav-link"
                  data-toggle="tab"
                  to="#tab-pane-3"
                >
                  Reviews (0)
                </Link>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tab-pane-1"
                >
                  <h4 className="mb-3">Product Description</h4>
                  <p>
                    Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                    sea. Consetetur vero aliquyam invidunt duo dolores et duo
                    sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                    consetetur invidunt sed sed et, lorem duo et eos elitr,
                    sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                    tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                    eos dolores sit no ut diam consetetur duo justo est, sit
                    sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                    accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                    invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                    takimata dolor ea invidunt.
                  </p>
                  <p>
                    Dolore magna est eirmod sanctus dolor, amet diam et eirmod
                    et ipsum. Amet dolore tempor consetetur sed lorem dolor sit
                    lorem tempor. Gubergren amet amet labore sadipscing clita
                    clita diam clita. Sea amet et sed ipsum lorem elitr et, amet
                    et labore voluptua sit rebum. Ea erat sed et diam takimata
                    sed justo. Magna takimata justo et amet magna et.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-pane-2"
                >
                  <h4 className="mb-3">Additional Information</h4>
                  <p>
                    Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                    sea. Consetetur vero aliquyam invidunt duo dolores et duo
                    sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                    consetetur invidunt sed sed et, lorem duo et eos elitr,
                    sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                    tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                    eos dolores sit no ut diam consetetur duo justo est, sit
                    sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                    accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                    invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                    takimata dolor ea invidunt.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0">
                          Sit erat duo lorem duo ea consetetur, et eirmod
                          takimata.
                        </li>
                        <li className="list-group-item px-0">
                          Amet kasd gubergren sit sanctus et lorem eos
                          sadipscing at.
                        </li>
                        <li className="list-group-item px-0">
                          Duo amet accusam eirmod nonumy stet et et stet eirmod.
                        </li>
                        <li className="list-group-item px-0">
                          Takimata ea clita labore amet ipsum erat justo
                          voluptua. Nonumy.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0">
                          Sit erat duo lorem duo ea consetetur, et eirmod
                          takimata.
                        </li>
                        <li className="list-group-item px-0">
                          Amet kasd gubergren sit sanctus et lorem eos
                          sadipscing at.
                        </li>
                        <li className="list-group-item px-0">
                          Duo amet accusam eirmod nonumy stet et et stet eirmod.
                        </li>
                        <li className="list-group-item px-0">
                          Takimata ea clita labore amet ipsum erat justo
                          voluptua. Nonumy.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab-pane-3"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="mb-4">
                        1 review for "Colorful Stylish Shirt"
                      </h4>
                      <div className="media mb-4">
                        <img
                          src="img/user.jpg"
                          alt=""
                          className="img-fluid mr-3 mt-1"
                          style={{ width: "45px" }}
                        />
                        <div className="media-body">
                          <h6>
                            John Doe
                            <small>
                              {" "}
                              - <i>01 Jan 2045</i>
                            </small>
                          </h6>
                          <div className="text-primary mb-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                          </div>
                          <p>
                            Diam amet duo labore stet elitr ea clita ipsum,
                            tempor labore accusam ipsum et no at. Kasd diam
                            tempor rebum magna dolores sed sed eirmod ipsum.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="mb-4">Leave Link review</h4>
                      <small>
                        Your email address will not be published. Required
                        fields are marked *
                      </small>
                      <div className="d-flex my-3">
                        <p className="mb-0 mr-2">Your Rating * :</p>
                        <div className="text-primary">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                      </div>
                      <form>
                        <div className="form-group">
                          <label for="message">Your Review *</label>
                          <textarea
                            id="message"
                            cols="30"
                            rows="5"
                            className="form-control"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label for="name">Your Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                          />
                        </div>
                        <div className="form-group">
                          <label for="email">Your Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                          />
                        </div>
                        <div className="form-group mb-0">
                          <input
                            type="submit"
                            value="Leave Your Review"
                            className="btn btn-primary px-3"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container-fluid py-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">You May Also Like</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
