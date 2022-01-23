
const Personlist = ({ filteredPersons, deletePerson }) => {
    return filteredPersons.map((person) => (
      <div key={person.id}>
        <p style={{ display: "inline-block", marginRight: 5 }}>
          {person.name} {person.number}
        </p>
        <button onClick={() => deletePerson(person)}>Delete</button>
      </div>
    ));
  };

  export default Personlist;