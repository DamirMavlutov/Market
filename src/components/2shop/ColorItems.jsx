import { useDispatch } from "react-redux";
import { filterColor } from "../../redux/actions";

const ColorItems = ({ item, index }) => {
  const dispatch = useDispatch();
  const handlerColor = () => {
    dispatch(filterColor(item));
  };
  const num2 = index + 1;
  return (
    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
      <input
        onChange={handlerColor}
        type="checkbox"
        className="custom-control-input"
        id={`color-${num2}`}
      />
      <label
        className="custom-control-label"
        for={`color-${num2}`}
      >
        {item}
      </label>
      <span className="badge border font-weight-normal">150</span>
    </div>
  );
};

export default ColorItems;
