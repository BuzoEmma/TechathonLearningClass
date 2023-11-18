import { useState } from "react";
import HOC from "./HOC";

const Order2 = ({ money, handleMoney }) => {
  return (
    <div>
      <h1>Iwegbu makes ${money} daily</h1>
      <button onClick={handleMoney}>Send Money</button>
    </div>
  );
};

export default HOC(Order2);
