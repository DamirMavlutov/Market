const RadioButton = ({ id, label, checked }) => {
  return (
    <div className="custom-control custom-radio custom-control-inline">
      <input
        type="radio"
        className="custom-control-input"
        id={id}
        name=""
      />
      <label
        className="custom-control-label"
        for=""
      >
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
