import { useDispatch } from "react-redux";
import { filterColor } from "../../redux/actions";

const ColorItems = ({ item, index }) => {
  const dispatch = useDispatch();
  const handlerColor = () => {
    dispatch(filterColor(item));
  };
  const num = index + 1;
  return (
    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
      <input
        onChange={handlerColor}
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

export default ColorItems;
