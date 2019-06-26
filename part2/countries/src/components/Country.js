import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h4>languages</h4>
      {country.languages.map((language, i) => (
        <li key={i}>{language.name}</li>
      ))}

      <div style={{ width: "150px" }}>
        <img src={country.flag} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Country;
