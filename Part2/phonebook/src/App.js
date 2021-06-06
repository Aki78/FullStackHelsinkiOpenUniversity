import React, { useState } from "react";

export const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
    console.log(event);
  };
  const checkSame = (myObject, myText) => {
    return myObject.reduce((a, b) => {
      return b.name === newName || a;
    }, false);
  };
  const addPerson = (event) => {
    event.preventDefault();
    if(checkSame(persons, newName)) window.alert(`Name ${newName} already exists`);
    console.log(persons.concat({ name: newName }));
    setPersons(persons.concat({ name: newName }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((personName) => (
        <div key={personName.name}> {personName.name}</div>
      ))}
    </div>
  );
};

export default App;
