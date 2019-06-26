import React from "react";

const Filter = ({ handleSearchChange, filteredPerson }) => {
  return (
    <div>
      <p>
        filter shown with <input onChange={handleSearchChange} />
      </p>
      {filteredPerson.length !== 0 &&
        `${filteredPerson[0].name} ${filteredPerson[0].number}`}
    </div>
  );
};

export default Filter;
