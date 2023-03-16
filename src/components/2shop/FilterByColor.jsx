import ColorItems from "./ColorItems";
import { useDispatch, useSelector } from "react-redux";
import { filterAllColors } from "../../redux/actions";

const FilterByColor = () => {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.dataReduser.colors);

  const handleAllColor = (e) => {
    dispatch(filterAllColors(e.target.checked));
  };
  let isAll = colors.every((el) => el.checked === true);

  return (
    <div>
      <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input
            checked={isAll}
            onChange={handleAllColor}
            type="checkbox"
            className="custom-control-input"
            id="color-all"
          />

          <label
            className="custom-control-label"
            for="color-all"
          >
            All Color
          </label>
          <span className="badge border font-weight-normal">1000</span>
        </div>
        {colors.map((item) => {
          return (
            <ColorItems
              item={item}
              key={item.id}
            />
          );
        })}
      </form>
    </div>
  );
};

export default FilterByColor;
