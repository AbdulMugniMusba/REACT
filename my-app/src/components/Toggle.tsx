import { useState } from "react";
import onnImg from "../assets/onn.jpg";
import offImg from "../assets/off.jpg";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <h2>Status: {isOn == true ? "on" : "off"}</h2>
      <div>
        <img
          src={isOn ? onnImg : offImg}
          alt="toggle"
          width="100px"
          onClick={() => setIsOn(!isOn)}
        />
      </div>
    </div>
  );
};
export default Toggle;
