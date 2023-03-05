import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { shopingCardAdd } from "../../redux/actions";

const DEFAULT_PHOTO =
  "https://images.unsplash.com/photo-1672310035534-7f48cfb23164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";

const Card = ({ item }) => {
  const { name, category, price, photos, sizes, id } = item;
  const dispatch = useDispatch();
  //console.log(">>88>>", item);

  const addToCard = () => {
    console.log("item>>", item);
    dispatch(shopingCardAdd(item));
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img
            className="img-fluid w-100"
            src={(photos && photos[0]) || DEFAULT_PHOTO}
            alt=""
          />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">{name}</h6>
          <div className="d-flex justify-content-center">
            <h6>${price}</h6>
            <h6 className="text-muted ml-2">
              <del>${price}</del>
            </h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <NavLink
            to={`/detail/${id}`}
            className="btn btn-sm text-dark p-0"
          >
            <i className="fas fa-eye text-primary mr-1"></i>View Detail
          </NavLink>
          <div
            onClick={addToCard}
            className="btn btn-sm text-dark p-0"
          >
            <i className="fas fa-shopping-cart text-primary mr-1"></i>
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
