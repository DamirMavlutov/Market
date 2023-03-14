import { useDispatch } from "react-redux";
import { filterColor } from "../../redux/actions";

const ColorItems = ({ item }) => {
  const dispatch = useDispatch();

  const handlerColor = () => {
    dispatch(filterColor(item.id));
  };

  return (
    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
      <input
        checked={item.checked}
        onChange={handlerColor}
        type="checkbox"
        className="custom-control-input"
        id={`color-${item.id}`}
      />
      <label
        className="custom-control-label"
        for={`color-${item.id}`}
      >
        {item.name}
      </label>
      <span className="badge border font-weight-normal">150</span>
    </div>
  );
};

export default ColorItems;
