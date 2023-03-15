import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../../redux/actions";
import Cards from "./Cards";
import FilterByColor from "./FilterByColor";
import FilterBySize from "./FilterBySize";
import FilterByPrice from "./FilterByPrice";

const ShopPage = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => {
    const { inputReduser } = state;
    return inputReduser.text;
  });

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };

  //здесь получаем массив для тестирования
  const newData = useSelector((state) => state.dataReduser);
  console.log("date from state2", newData);

  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "300px" }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Our Shop
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <NavLink to="/">Home</NavLink>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop</p>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-12">
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
              <FilterByPrice />
            </div>

            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
              <FilterByColor />
            </div>

            <div className="mb-5">
              <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
              <FilterBySize />
            </div>
          </div>

          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        onChange={handleChange}
                      />

                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                      <br />
                      <p>{text}</p>
                    </div>
                  </form>
                  <div className="dropdown ml-4">
                    <button
                      className="btn border dropdown-toggle"
                      type="button"
                      id="triggerId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort by
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="triggerId"
                    >
                      <NavLink
                        className="dropdown-item"
                        to="#"
                      >
                        Latest
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="#"
                      >
                        Popularity
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="#"
                      >
                        Best Rating
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <Cards />
              <div className="col-12 pb-1">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center mb-3">
                    <li className="page-item disabled">
                      <NavLink
                        className="page-link"
                        to="#"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </NavLink>
                    </li>
                    <li className="page-item active">
                      <NavLink
                        className="page-link"
                        to="#"
                      >
                        1
                      </NavLink>
                    </li>
                    <li className="page-item">
                      <NavLink
                        className="page-link"
                        to="#"
                      >
                        2
                      </NavLink>
                    </li>
                    <li className="page-item">
                      <NavLink
                        className="page-link"
                        to="#"
                      >
                        3
                      </NavLink>
                    </li>
                    <li className="page-item">
                      <NavLink
                        className="page-link"
                        to="#"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
