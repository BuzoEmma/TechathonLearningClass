// import { useEffect } from "react";
import { useEffect, useRef, useState } from "react";
import { numberValue } from "../Usecontext/ReactContext";

const Distructure = () => {
  const { apps } = numberValue();

  return (
    <div style={{ margin: "1rem" }}>
      <h1>This is our Number Value {apps}</h1>
    </div>
  );
};
export default Distructure;

// function MyComponent() {
//   const inputRef = useRef();

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return <input ref={inputRef} />;
// }
