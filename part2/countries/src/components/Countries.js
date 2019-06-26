import React from 'react';

const Countries = ({ matched }) => {
    if (matched.length === 1) {
      return (
        <div>
          <h2>{matched[0].name}</h2>
          <p>capital {matched[0].capital}</p>
          <p>population {matched[0].population}</p>
          <h4>languages</h4>
          {matched[0].languages.map((language, i) => (
            <li key={i}>{language.name}</li>
          ))}
  
          <div style={{ width: "150px" }}>
            <img src={matched[0].flag} style={{ width: "100%" }} />
          </div>
        </div>
      );
    } else if (matched.length > 1 && matched.length < 10) {
      return (
        <div>
          {matched.map(country => (
            <p>{country.name}</p>
          ))}
        </div>
      );
    } else return <div />;
  };

  export default Countries;