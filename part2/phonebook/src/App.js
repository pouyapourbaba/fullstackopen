import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personServices from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([]);
  const [notification, setNotification] = useState({});

  // fetch initail data
  useEffect(() => {
    personServices
      .getAll()
      .then(persons => setPersons(persons))
      .catch(error => {
        setNotification({
          ...notification,
          message: "Persons not fetched",
          type: "error"
        });
        setTimeout(() => {
          setNotification({
            ...notification,
            message: "",
            type: ""
          });
        }, 5000);
      });
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
    const existingPerson = persons.filter(
      person => person.name === newPerson.name
    );

    existingPerson.length !== 0
      ? window.confirm(
          `${
            newPerson.name
          } is already added to phonebook, replace the old number with a new one?`
        ) &&
        personServices
          .updateNumber(newPerson, existingPerson[0].id)
          .then(res => {
            setPersons(
              persons.map(person => (person.id !== res.id ? person : res))
            );
            setNotification({
              ...notification,
              message: `Updated ${newPerson.name}'s number`,
              type: "success"
            });
            setTimeout(() => {
              setNotification({
                ...notification,
                message: "",
                type: ""
              });
            }, 5000);
          })
          .catch(error => {
            setNotification({
              ...notification,
              message: `Could not updated ${newPerson.name}'s number`,
              type: "error"
            });
            setTimeout(() => {
              setNotification({
                ...notification,
                message: "",
                type: ""
              });
            }, 5000);
          })
      : personServices
          .postPerson(newPerson)
          .then(res => {
            setPersons(persons.concat(res));
            setNotification({
              ...notification,
              message: `Added ${newPerson.name}`,
              type: "success"
            });
            setTimeout(() => {
              setNotification({ ...notification, message: "", type: "" });
            }, 5000);
          })
          .catch(error => {
            setNotification({
              ...notification,
              message: "could not add person",
              type: "error"
            });
            setTimeout(() => {
              setNotification({
                ...notification,
                message: "",
                type: ""
              });
            }, 5000);
          });
  };

  // delete person
  const deletePerson = person => {
    window.confirm(`Delete ${person.name}?`) &&
      personServices
        .deletePerson(person.id)
        .then(res => {
          setPersons(persons.filter(p => p.id !== person.id));

          setNotification({
            ...notification,
            message: `${person.name} is removed from the server`,
            type: "success"
          });
          setTimeout(() => {
            setNotification({
              ...notification,
              message: "",
              type: ""
            });
          }, 5000);
        })
        .catch(error => {
          setNotification({
            ...notification,
            message: `Information of ${
              person.name
            } has already been removed from the server`,
            type: "error"
          });
          setTimeout(() => {
            setNotification({
              ...notification,
              message: "",
              type: ""
            });
          }, 5000);
        });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
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
      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  );
}

export default App;
