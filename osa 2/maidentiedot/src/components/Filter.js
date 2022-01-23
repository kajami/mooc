import React, { useState } from "react";


const Filter = (props) => {
    const filteredList = [];
    const [temperature, setTemperature] = useState("");
    const [weather, setWeather] = useState("");
    const [wind, setWind] = useState("");
    const [picture, setPicture] = useState("");
    const [cityRender, setCityrender] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    const api_key = process.env.REACT_APP_API_KEY;
  
    function getWeather(city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}
          &units=metric&APPID=${api_key}`
      )
        .then((response) => response.json())
        .then((data) => {
          setTemperature(`Temperature: ${data.main.temp} Celcius`);
          setWeather(`Weather: ${data.weather[0].main}`);
          setPicture(
            "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
          );
          setCityrender(`Weather in ${city}`);
          setWind(`Wind: ${data.wind.speed} km/h`);
          setLoading(true);
        })
        .catch((err) => console.log(err));
  
      if (!isLoading) {
        return <div>Loading..</div>;
      } else {
        return (
          <div>
            <h2>{cityRender}</h2>
            <p>{temperature}</p>
            <p>{weather}</p>
            <img src={picture} alt={cityRender}></img>
            <p>{wind}</p>
          </div>
        );
      }
    }
  
    props.countries
      .filter((name) => {
        return (
          name.name.toLowerCase().indexOf(props.filterText.toLowerCase()) >= 0
        );
      })
      .map((country) => filteredList.push(country));
    if (filteredList.length === props.countries.length) {
      return <p></p>;
    }
    if (filteredList.length >= 10) {
      return <p>Too many matches, specify another filter</p>;
    }
    if (filteredList.length === 1) {
      return filteredList.map((country) => (
        <div key={country.name}>
          <h1>{country.name}</h1>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h2>languages</h2>
          {country.languages.map((language) => {
            return (
              <ul key={language.name}>
                <li>{language.name}</li>
              </ul>
            );
          })}
          <img
            style={{ width: 300, height: 200 }}
            src={country.flag}
            alt={country.flag.png}
          />
          {getWeather(country.capital)}
        </div>
      ));
    }
    return filteredList.map((country) => (
      <p key={country.name}>{country.name}</p>
    ));
  };

  export default Filter;