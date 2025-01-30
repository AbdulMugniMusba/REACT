import "./cars.css";
function carslist() {
  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: "$24,000",
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2021,
      price: "$22,000",
    },
    {
      id: 3,
      make: "Ford",
      model: "Mustang",
      year: 2019,
      price: "$26,000",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="">Car Table</h2>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr className="list-car-items" key={car.id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default carslist;
