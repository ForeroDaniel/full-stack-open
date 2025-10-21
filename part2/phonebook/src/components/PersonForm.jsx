const PersonForm = ({ newPerson, setNewPerson, submitForm }) => {
  return (
    <form onSubmit={submitForm}>
      <div>
        name:
        <input
          type='text'
          value={newPerson.name}
          onChange={event =>
            setNewPerson({ ...newPerson, name: event.target.value })
          }
        />
      </div>
      <div>
        number:
        <input
          type='number'
          value={newPerson.number}
          onChange={event =>
            setNewPerson({ ...newPerson, number: event.target.value })
          }
        />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
