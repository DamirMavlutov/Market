import ColorItems from "./ColorItems";

let colors = ["black", "white", "blue", "red", "green"];
const FilterByColor = () => {
  return (
    <div>
      <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="color-all"
          />
          <label
            className="custom-control-label"
            for="price-all"
          >
            All Color
          </label>
          <span className="badge border font-weight-normal">1000</span>
        </div>
        {colors.map((item, index) => {
          return (
            <ColorItems
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

export default FilterByColor;
