import { useDispatch } from "react-redux";
import { filterAllPrices } from "../../redux/actions";

const PriceAllItems = ({ item }) => {
  const dispatch = useDispatch();

  const handleAllSize = (e) => {
    dispatch(filterAllPrices(e.target.checked));
  };

  let isAll = item.every((el) => el.checked === true);

  return (
    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
      <input
        checked={isAll}
        onChange={handleAllSize}
        type="checkbox"
        className="custom-control-input"
        id="price-all"
      />
      <label
        className="custom-control-label"
        for="price-all"
      >
        All Price
      </label>
      <span className="badge border font-weight-normal">1000</span>
    </div>
  );
};

export default PriceAllItems;
