export const CountryInfo = ({dataElem}) => (
  <div>
    Capital: {dataElem.capital}
    <br /> Population: {dataElem.population}
    <br />
    <br />
    Languages:
    <br />
    <br />
    {dataElem.languages.map((smallerElem) => (
      <div> &nbsp;&nbsp;&nbsp;&nbsp; {smallerElem.name}</div>
    ))}
    <br />
    <br />
    <img width="20%" src={dataElem.flag} />
  </div>
);
