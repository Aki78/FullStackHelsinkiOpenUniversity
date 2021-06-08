import React, { useState, useEffect } from "react";
import { PrintList } from "./Components/PrintList";
import axios from "axios";

export const App = () => {
  const [data, setData] = useState();
  const [searchString, setSearchString] = useState("");
  const [currentCountries, setCurrentCountries] = useState([""]);

  useEffect(() => {
    const eventHandler = (response) => {
      console.log("promise fulfilled");
      setData(response.data);
    };

    const promise = axios.get("https://restcountries.eu/rest/v2/all");
    promise.then(eventHandler);
  }, []);

  const handleSearchString = (event) => {
    event.preventDefault();
    const newValue = event.target.value;
    setSearchString(newValue);
    console.log(searchString, "string");
  };

  const handleNames = () => {
    let buffCountries = [];
    data.map((dataElement) => {
      if (dataElement.name.toLowerCase().includes(searchString.toLowerCase()))
        buffCountries.push(dataElement.name);
    });
    setCurrentCountries(buffCountries);
    console.log(currentCountries, "current");
  };

  const handleChange = (e) => {
    handleSearchString(e);
    handleNames();
  };

  if (!data) return <div> Loading... </div>;
  if (data)
    return (
      <>
        <input onChange={handleChange} onKeyUp={handleChange} />
        <PrintList data={data} currentCountries={currentCountries} />
      </>
    );
};

export default App;
