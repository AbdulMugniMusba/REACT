import { useState } from "react";
const SetName = () => {
  const [name, SetName] = useState(" ");

  return (
    <div>
      <h1>Name:{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => SetName(e.target.value)}
      ></input>
    </div>
  );
};
export default SetName;
