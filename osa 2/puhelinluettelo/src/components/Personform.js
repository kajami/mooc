
const PersonForm = (props) => {
    const newName = props.newName;
    const newNumber = props.newNumber;
    return (
      <form onSubmit={props.addNew}>
        <h2>add a new</h2>
        <div>
          name: <input value={newName} onChange={props.handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={props.handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
  };

  export default PersonForm;