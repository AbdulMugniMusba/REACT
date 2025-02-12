import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define the Fruit interface to type the Fruit data
interface Fruit {
  id: string;
  name: string;
  description: string;
}

function Fruits() {
  const API_URL = "https://67a97dd26e9548e44fc3c61b.mockapi.io/Fruits";
  const [Fruits, setFruits] = useState<Fruit[]>([]);
  const fetchFruits = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setFruits(data);
  };

  const deleteFruit = async (id: string) => {
    const request = {
      method: "DELETE",
    };
    const response = await fetch(`${API_URL}/${id}`, request);
    const data = response.json();
    console.log(data);
    const updatedFruits = Fruits.filter((Fruit) => Fruit.id != id);
    setFruits(updatedFruits);
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <>
      <div>
        <Link to="/AddFruit" className="btn btn-outline-success mb-3">
          ➕ Add Fruit
        </Link>
      </div>

      <h2>Fruit List</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Fruit Name</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Fruits.map((Fruit) => (
            <tr key={Fruit.id}>
              <th scope="row">{Fruit.id}</th>
              <td>{Fruit.name}</td>
              <td>{Fruit.description}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteFruit(Fruit.id)}
                >
                  🗑️ Delete
                </button>
                <Link
                  to={`/EditFruit/${Fruit.id}`}
                  className="btn btn-warning "
                >
                  ✏ Edit
                </Link>
              </td>
            </tr>
            // Use the user's id as the key for each list item
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Fruits;
