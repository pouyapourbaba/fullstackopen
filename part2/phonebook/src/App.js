import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([]);

  // fetch initail data
  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(res => setPersons(res.data));
  }, []);

  // change event for name input
  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  // change event for number input
  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  // change event for search input
  const handleSearchChange = e => {
    const filtered = persons.filter(
      person =>
        person.name.toLocaleLowerCase() === e.target.value.toLocaleLowerCase()
    );
    if (filtered.length !== 0) {
      setFilteredPerson(filtered);
    }
  };

  // submit the form
  const submitPerson = e => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const doesExist = persons.filter(person => person.name === newPerson.name);
    doesExist.length !== 0
      ? alert(`${newPerson.name} is already added to phonebook`)
      : setPersons(persons.concat(newPerson));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleSearchChange={handleSearchChange}
        filteredPerson={filteredPerson}
      />
      <h2>add a new</h2>
      <PersonForm
        submitPerson={submitPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
}

export default App;
