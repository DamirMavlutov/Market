import { filterPrice } from "../../redux/actions";
import { useDispatch } from "react-redux";

const PriceItems = ({ item }) => {
  const dispatch = useDispatch();
  const handlePrice = () => {
    return dispatch(filterPrice(item.id));
  };
  return (
    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
      <input
        checked={item.checked}
        onChange={handlePrice}
        type="checkbox"
        className="custom-control-input"
        id={`color-${item.id}`}
      />
      <label
        className="custom-control-label"
        for={`color-${item.id}`}
      >
        ${item.from} - ${item.to}
      </label>
      <span className="badge border font-weight-normal">150</span>
    </div>
  );
};

export default PriceItems;
