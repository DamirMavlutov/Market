import { useDispatch } from "react-redux";
import { filterColor } from "../../redux/actions";
const ColorItems = ({ item }) => {
  const dispatch = useDispatch();
  const handlerColor = () => {
    dispatch(filterColor(item));
  };
  return (
    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
      <input
        onChange={handlerColor}
        type="checkbox"
        className="custom-control-input"
        id="color-1"
      />
      <label
        className="custom-control-label"
        for="color-1"
      >
        {item}
      </label>
      <span className="badge border font-weight-normal">150</span>
    </div>
  );
};

export default ColorItems;
