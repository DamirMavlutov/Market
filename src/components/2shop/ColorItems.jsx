const ColorItems = ({ item }) => {
  return (
    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
      <input
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
