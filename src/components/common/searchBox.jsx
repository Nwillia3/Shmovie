import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      onChange={e => onChange(e.currentTarget.value)}
      placeholder="Search....."
      name="query"
      value={value}
      className="form-control my-3"
    />
  );
};

export default SearchBox;
