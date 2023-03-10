import SizeItems from "./SizeItems";
let sizes = ["s", "m", "l", "xl", "xxl"];

const FilterBySize = () => {
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
            />
          );
        })}
      </form>
    </div>
  );
};

export default FilterBySize;
