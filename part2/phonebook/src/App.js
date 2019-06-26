import React, { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  // change event for name input
  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  // change event for number input
  const handleNumberChange = e => {
    setNewNumber(e.target.value);
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
      <form onSubmit={submitPerson}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <p key={person.name}>{person.name} {person.number}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
