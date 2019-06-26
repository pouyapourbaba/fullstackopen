import React, { useState } from "react";
import Country from "./Country";

const Countries = ({ matched }) => {
  const [selected, setSelected] = useState();

  const handleShowCountry = country => {
    setSelected(country);
  };

  if (matched.length === 1) {
    return <Country country={matched[0]} />;
  } else if (matched.length > 1 && matched.length < 10) {
    return (
      <div>
        {matched.map(country => (
          <p key={country.numericCode}>
            {country.name}{" "}
            <button onClick={() => handleShowCountry(country)}>show</button>
          </p>
        ))}
        <div>{selected &&  <Country country={selected} />}</div>
      </div>
    );
  } else return <div />;
};

export default Countries;
