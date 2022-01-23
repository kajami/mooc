import React, { useState, useEffect } from "react";
import numberService from "./services/numbers";
import PersonForm from "./components/Personform";
import Personlist from "./components/Personlist";
import FilterInput from "./components/FilterInput";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    numberService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((error) => {
        console.log("Error getting persons from database");
      });
  }, []);

  const addNew = (event) => {
    event.preventDefault();
    if (!newName) {
      alert("Add name please");
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber,
    };
    const nameExists = persons.find((p) => p.name === newName);
    const numberExist = persons.find((p) => p.number === newNumber);
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    if (numberExist) {
      alert(`${newNumber} is already added to phonebook`);
    } else {
      numberService.create(personObject).then((initialPersons) => {
        setPersons(persons.concat(initialPersons));
        setNewName("");
        setNewNumber("");
        setMessage(`Added ${personObject.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 4000)
      })
      .catch((error) => {
        console.log("Error adding person to database");
      });
    }
  };

  const deletePerson = (personToDelete) => {
    if (window.confirm(`Really want to delete ${personToDelete.name} ?`)) {
      numberService.deletePerson(personToDelete).then(() => {
        setPersons(persons.filter((person) => person.id !== personToDelete.id));
        setMessage(`Deleted ${personToDelete.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 4000)
      })
      .catch((error) => {
        console.log("Error deleting person");
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterName = (event) => {
    setFilterText(event.target.value);
  };

  const filteredPersons =
    filterText.length > 0
      ? persons.filter((person) =>
          person.name.toLowerCase().startsWith(filterText.toLowerCase())
        )
      : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <FilterInput
        handleFilterName={handleFilterName}
        filterText={filterText}
      />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addNew={addNew}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <div>
        <Personlist
          deletePerson={deletePerson}
          filteredPersons={filteredPersons}
        />
      </div>
    </div>
  );
};

export default App;
