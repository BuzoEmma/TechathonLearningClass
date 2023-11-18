import { useState } from "react";
import HOC from "./HOC";

const Order1 = ({ handleMoney, money, inLineStyle }) => {
  return (
    <div style={inLineStyle}>
      <h1>Habibah makes ${money} daily</h1>
      <button onClick={handleMoney}>Send Money</button>
    </div>
  );
};

export default HOC(Order1);
