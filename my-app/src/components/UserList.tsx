import { useEffect, useState } from "react";
interface User {
    id: number;
    name: string;
    email: string;
   
}

function UserList() {
    const [users,setusers] = useState<User[]>([]);
    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        setusers(users);
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        users.map((user) => (
        <table className="table">
  <thead>
    <tr key={user.id}>
      
      <th scope="col">Id</th>
      <th scope="col">Email</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>{user.name}</td>
    </tr>
    
  </tbody>
</table>
        )));

}
 export default UserList;