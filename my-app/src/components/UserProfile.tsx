import { useState } from "react";
const UserProfile = () => {
  const [user, setUser] = useState({name:"", age:""} );

  return (
    <div>
        <h1>Name:{user.name}</h1>
        <h1>Age:{user.age}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={user.name}
        onChange={(e) => setUser({name:e.target.value, age:user.age})}
      ></input>
      <input
        type="number"
        placeholder="Enter your Age"
        value={user.age}
        onChange={(e) => setUser({age:e.target.value, name:user.name})}
      ></input>

        
      
    </div>
  );
  }
export default UserProfile;