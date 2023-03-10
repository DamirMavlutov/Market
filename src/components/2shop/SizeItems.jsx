import { useDispatch } from "react-redux";
import { filterSize } from "../../redux/actions";
const SizeItems = ({ item, index }) => {
  const dispatch = useDispatch();
  const handlerSize = () => {
    dispatch(filterSize(item));
  };
  const num = index + 1;

  return (
    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
      <input
        onChange={handlerSize}
        type="checkbox"
        className="custom-control-input"
        id={`size-${num}`}
      />
      <label
        className="custom-control-label"
        for={`size-${num}`}
      >
        {item}
      </label>
      <span className="badge border font-weight-normal">150</span>
    </div>
  );
};

export default SizeItems;
