import { useEffect, useState } from 'react';
import Search from './components/Search';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: '', number: '' });
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled');
      setPersons(response.data);
    });
  }, []);
  console.log('render', persons.length, 'notes');

  const submitForm = event => {
    event.preventDefault();
    if (persons.some(person => person.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`);
      setNewPerson({ name: '', number: '' });
      return;
    }
    setPersons(
      persons.concat({
        name: newPerson.name,
        number: newPerson.number,
        id: persons.length + 1,
      }),
    );
    setNewPerson({ name: '', number: '' });
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Search search={search} setSearch={setSearch} />

      <h2>add a new</h2>
      <PersonForm
        newPerson={newPerson}
        setNewPerson={setNewPerson}
        submitForm={submitForm}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
