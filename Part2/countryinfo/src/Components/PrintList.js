import { CountryInfo } from "./CountryInfo";
import { useState } from "react";

export const PrintList = ({ data, currentCountries }) => {
  const [oneCountry, setOneCountry] = useState("");
  console.log(oneCountry, "one country");
  const clickMe = (countryName) => {
    setOneCountry(countryName);
  };
  const returnMe = (myElem) => {
    if (oneCountry === myElem.name) {
      console.log("hit");
      return <CountryInfo dataElem={myElem} />;
    }
  };

  if (currentCountries.length == 1)
    return data.map((dataElem) => {
      if (dataElem.name === currentCountries[0]) {
        console.log(dataElem);
        return <CountryInfo dataElem={dataElem} />;
      }
    });
  else if (currentCountries.length < 10)
    return data.map((dataElem, index) => {
      if (currentCountries.includes(dataElem.name)) {
return(
      <div>
        {dataElem.name}
        <button onClick={() => clickMe(dataElem.name)}> Info </button>
        {returnMe(dataElem)}
      </div>
      )
      } 
    });
  else return <div> too many countries </div>;
};

