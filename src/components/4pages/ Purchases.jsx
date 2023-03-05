const Purchases = ({ item }) => {
  const { name, category, price, photos, sizes, id } = item;

  return (
    <>
      <tr>
        <td className="align-middle">
          <img
            src={photos && photos[0]}
            alt=""
            style={{ width: "50px" }}
          />{" "}
          {name}
        </td>
        <td className="align-middle">{price}</td>
        <td className="align-middle">
          <div
            className="input-group quantity mx-auto"
            style={{ width: "100px" }}
          >
            <div className="input-group-btn">
              <button className="btn btn-sm btn-primary btn-minus">
                <i className="fa fa-minus"></i>
              </button>
            </div>
            <input
              type="text"
              className="form-control form-control-sm bg-secondary text-center"
              value="1"
            />
            <div className="input-group-btn">
              <button className="btn btn-sm btn-primary btn-plus">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </td>
        <td className="align-middle">{price}</td>
        <td className="align-middle">
          <button className="btn btn-sm btn-primary">
            <i className="fa fa-times"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Purchases;
