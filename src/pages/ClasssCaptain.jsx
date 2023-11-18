import Button from "./Button";
import SecondDistructure from "./SecondDistructure";
import { numberValue } from "../Usecontext/ReactContext";

const ClasssCaptain = () => {
  const { increament } = numberValue();

  return (
    <div>
      {/* <h1>Welcome to Techathon 4.0 </h1> */}
      {/* <p>{children}</p> */}
      <em></em>
      {/* <SecondDistructure  /> */}
      list of item with blue
      <Button>Class Button </Button>
      <h1>Prop drilling: </h1>
      <button onClick={increament}>Click</button>
    </div>
  );
};

export default ClasssCaptain;
