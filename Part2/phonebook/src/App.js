import React, { useState, useEffect } from "react";
import { PrintList } from "./Components/PrintList";
import { MyForm } from "./Components/MyForm";
import axios from 'axios'

export const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "1234567" },
  ]);

  useEffect(() => {
    console.log('effect')

    const eventHandler = (response) => {
      console.log("promise fulfilled");
      console.log(response.data)
      setPersons(response.data);
    };

    const promise = axios.get("http://localhost:3002/persons");
    promise.then(eventHandler);
  }, []);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");

  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
    console.log(event);
  };
  const handleNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
    console.log(event);
  };
  const handleSearchString = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
    console.log(event);
  };
  const checkSame = (myObject, myText) => {
    return myObject.reduce((a, b) => {
      return b.name === newName || a;
    }, false);
  };
  const addPerson = (event) => {
    event.preventDefault();
    if (checkSame(persons, newName))
      window.alert(`Name ${newName} already exists`);
    console.log(persons.concat({ name: newName }));
    setPersons(persons.concat({ name: newName, number: newNumber }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search : <input onChange={handleSearchString} />
      </div>
      <MyForm
        handleNameChange={handleNameChange}
        handleSearchString={handleSearchString}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <PrintList persons={persons} searchString={searchString} />
    </div>
  );
};

export default App;
