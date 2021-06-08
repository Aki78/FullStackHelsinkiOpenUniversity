export const PrintList = ({ persons, searchString }) =>
  persons.map((persons) => {
    if (persons.name.toLowerCase().includes(searchString.toLowerCase()))
      return (
        <div key={persons.name}>
          {persons.name} {persons.number}
        </div>
      );
  });
