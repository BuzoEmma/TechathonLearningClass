import { useState } from "react";
import ClasssCaptain from "./ClasssCaptain";

const Eventhandle = ({time, apps}) => {

    
  const [Click, setClick] = useState("");
  const [ifSate, setifSate] = useState(false);

  const handleClick = () => {
    setifSate((prev) => !prev);
  };

    const name =  "Buzo";
   

  return (
    <div>
      {Click} <br />
      {/* <p>{name}</p> */}
      {time ?? name} <br />
      <button onClick={handleClick}>Click me</button>
      <br />
      <div></div>

      <ClasssCaptain apps={apps} />
    </div>
  );
};

export default Eventhandle;
