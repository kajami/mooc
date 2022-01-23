import axios from "axios";
import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import FilterInput from "./components/FilterInput";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterName = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <div>
      <FilterInput
        handleFilterName={handleFilterName}
        filterText={filterText}
      />
      <Filter countries={countries} filterText={filterText} />
    </div>
  );
}

export default App;
