import SizeItems from "./SizeItems";
import { useDispatch, useSelector } from "react-redux";
import { filterAllSizes } from "../../redux/actions";

const FilterBySize = () => {
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.dataReduser.sizes);

  const handleAllSize = () => {
    dispatch(filterAllSizes(sizes));
  };

  return (
    <div>
      <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input
            //checked={sizes[0].checked}
            onClick={handleAllSize}
            type="checkbox"
            className="custom-control-input"
            id="size-all"
          />
          <label
            className="custom-control-label"
            for="size-all"
          >
            All Size
          </label>
          <span className="badge border font-weight-normal">1000</span>
        </div>
        {sizes.map((item) => {
          return (
            <SizeItems
              item={item}
              key={item.id}
            />
          );
        })}
      </form>
    </div>
  );
};

export default FilterBySize;
