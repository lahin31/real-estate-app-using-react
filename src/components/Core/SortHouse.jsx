import React from "react";

const SortHouse = React.memo(function SortHouse(props) {
  const {
    selectedSortType,
    sortChange,
    selectedDefault,
    handleSortDirection
  } = props;
  return (
    <div className="row">
      <div className="form-group col-md-3">
        <label htmlFor="sort_by">Sort by</label>
        <select
          name={selectedSortType}
          className="custom-select"
          onChange={sortChange}
          value={selectedDefault}
        >
          <option value="pleaseSelect" disabled>
            Please select
          </option>
          <option value="price">Price</option>
          <option value="bedroom">Bedroom</option>
          <option value="bathroom">Bathroom</option>
        </select>
      </div>
      <div className="form-group col-md-3">
        <label htmlFor="sort_direction">Sort Direction</label>
        <div className="sort_dir_btn">
          <button
            className="btn btn-success"
            onClick={() => handleSortDirection("asc")}
          >
            Asc
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleSortDirection("desc")}
            style={{ marginLeft: "5px" }}
          >
            Desc
          </button>
        </div>
      </div>
    </div>
  );
});

export default SortHouse;
