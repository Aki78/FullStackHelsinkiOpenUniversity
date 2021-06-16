export const PrintList = ({ persons, searchString, deletePerson }) =>
  persons.map((persons) => {
    if (persons.name.toLowerCase().includes(searchString.toLowerCase()))
      return (
        <div key={persons.id}>
          {persons.name} {persons.number} <button onClick={() => deletePerson(persons.id)} style={{ borderColor:"red"}}> delete </button>
        </div>
      );
  });
