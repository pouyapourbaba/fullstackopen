import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState();

  const apiKey = "dc190e52a9aa4618bce124434192606";
  useEffect(() => {
    axios
      .get(
        `http://api.apixu.com/v1/current.json?key=${apiKey}&q=${
          country.capital
        }`
      )
      .then(res => {
        setWeather(res.data);
      });
  }, []);

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h4>languages</h4>
      <ul>
        {country.languages.map((language, i) => (
          <li key={i}>{language.name}</li>
        ))}
      </ul>
      <div style={{ width: "150px" }}>
        <img src={country.flag} alt={`Flag of ${country.name}`} style={{ width: "100%" }} />
      </div>
      {weather && (
        <div>
          <h3>Wearther in {country.capital}</h3>
          <h4>
            temperature:{" "}
            <span style={{ fontWeight: "normal" }}>
              {weather.current.temp_c} Celsius
            </span>
          </h4>
          <img src={weather.current.condition.icon} alt={`icon of weather`}/>
          <h4>
            Wind:{" "}
            <span style={{ fontWeight: "normal" }}>
              {weather.current.wind_kph} kph direction{" "}
              {weather.current.wind_dir}
            </span>
          </h4>
        </div>
      )}
    </div>
  );
};

export default Country;
