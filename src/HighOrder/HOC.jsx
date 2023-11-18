import { useState } from "react";

const HOC = (HighOrderComponent) => {
  const NewComponent = () => {
    const [money, setMoney] = useState(100);

    const handleMoney = () => {
      setMoney(money * 500);
    };

    const inLineStyle = {
      padding: "2rem",
      color: "red",
    };

    return (
      <div>
        <HighOrderComponent
          money={money}
          setMoney={setMoney}
          handleMoney={handleMoney}
          inLineStyle={inLineStyle}
        />
      </div>
    );
  };

  return NewComponent;
};

export default HOC;
