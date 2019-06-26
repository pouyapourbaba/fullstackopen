import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => setCountries(res.data));
  }, []);

  const handleQueryChange = e => {
    const matched = countries.filter(country =>
      country.name.toLowerCase().includes(e.target.value)
    );
    setMatched(matched);
  };
  console.log(matched)
  return (
    <div className="App">
      find countries <input onChange={handleQueryChange} />
      <Countries matched={matched} />
    </div>
  );
}

export default App;
