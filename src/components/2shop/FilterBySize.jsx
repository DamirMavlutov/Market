import SizeItems from "./SizeItems";
import { useDispatch, useSelector } from "react-redux";

const FilterBySize = () => {
  //const isAll = // if all isCheched true

  const sizes = useSelector((state) => state.dataReduser.sizes);
  return (
    <div>
      <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input
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
        {sizes.map((item, index) => {
          return (
            <SizeItems
              item={item}
              index={index}
              key={index}
            />
          );
        })}
      </form>
    </div>
  );
};

export default FilterBySize;
