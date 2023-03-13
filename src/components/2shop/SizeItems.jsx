import { filterSize } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const SizeItems = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(filterSize(item.id));
  };

  return (
    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
      <input
        checked={item.checked}
        onClick={handleClick}
        type="checkbox"
        className="custom-control-input"
        id={`size-${item.id}`}
      />
      <label
        className="custom-control-label"
        for={`size-${item.id}`}
      >
        {item.name}
      </label>
      <span className="badge border font-weight-normal">150</span>
    </div>
  );
};

export default SizeItems;
