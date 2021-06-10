import React, { useState, useEffect } from "react";
import { PrintList } from "./Components/PrintList";
import { MyForm } from "./Components/MyForm";
import axios from "axios";
import { getAll, create, update } from "./service";

const baseUrl = "http://localhost:3002/persons/";

export const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");

  const checkSame = (myObject, myText) => {
    return myObject.reduce((a, b) => {
      return b.name === newName || a;
    }, false);
  };

  useEffect(() => {
    const eventHandler = (response) => {
      console.log("promise fulfilled");
      console.log(response);
      setPersons(response);
    };

    getAll().then(eventHandler);
  }, []);

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

  const deletePerson = (id) => {
    const newList = persons.filter((item) => item.id !== id);
    axios.delete(baseUrl + id);
    setPersons(newList);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (checkSame(persons, newName)) {
      const selectedObj = persons.find((x) => x.name === newName);
      console.log(selectedObj, "ididid");
      const changedPerson = { ...selectedObj, number: newNumber };
      setPersons(
        persons.map((pers) => (pers.id === selectedObj.id ? changedPerson : pers))
      );
      update(selectedObj.id, { ...selectedObj, number: newNumber });
    } else {
      const newObject = { name: newName, number: newNumber };
      create(newObject);
      setPersons(persons.concat(newObject));
    }
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
      <PrintList
        deletePerson={deletePerson}
        persons={persons}
        searchString={searchString}
      />
    </div>
  );
};

export default App;
