import { useState } from "react";
const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    mob:"",
    address: "",

  });

  return (
    <div>
      <h1>Name:{user.name}</h1>
      <h1>Age:{user.age}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={user.name}
        onChange={(e) => 
          setUser({
             ...user,
             name: e.target.value,})}
      ></input>
      <input
        type="number"
        placeholder="Enter your Age"
        value={user.age}
        onChange={(e) => 
          setUser(
            { ...user, 
              age: e.target.value, })}
      ></input>
      <input
        type="text"
        placeholder="Enter your address"
        value={user.address}
        onChange={(e) => 
          setUser(
            { ...user, 
              address: e.target.value, })}
      ></input>
      <input
        type="text"
        placeholder="Enter your email"
        value={user.email}
        onChange={(e) => 
          setUser(
            { ...user, 
              email: e.target.value, })}
      ></input>
    </div>
  );
};
export default UserProfile;
