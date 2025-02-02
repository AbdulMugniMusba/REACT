import Cars2 from "../Module/Cars";
  interface Cars2props {
    Cars2: Cars2[];
  }
  function cars2(Cars2props: Cars2props) {

 

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
          {Cars2props.Cars2.map((cars2) => (
            <tr className="list-car-items" key={cars2.id}>
              <td>{cars2.make}</td>
              <td>{cars2.model}</td>
              <td>{cars2.year}</td>
              <td>{cars2.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default cars2;