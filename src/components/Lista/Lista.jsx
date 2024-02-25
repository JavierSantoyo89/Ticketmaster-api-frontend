 //*********************/ Lista *********************/
//********************* prectice *********************/

function Lista() {
  const people = [
    { id: 1, name: "Wesley", age: 26 },
    { id: 2, name: "Jen", age: 22 },
    { id: 3, name: "Sarah", age: 28 },
    { id: 4, name: "Dan", age: 27 },
    { id: 5, name: "Sarah", age: 28 },
    { id: 6, name: "Dan", age: 27 },
    { id: 7, name: "Sarah", age: 28 },
    { id: 8, name: "Dan", age: 27 },
  ];

  return (
    <div>
      {/* {people.map((person) => (
        <ul key={person}>
          <li>{person.name}</li>
          <li>{person.age}</li>
        </ul>
        

        
      ))} */}

      {people.map((person) => {
        return (
          <table key={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td key={person.name}>{person.name}</td>
                <td>{person.age}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default Lista;
