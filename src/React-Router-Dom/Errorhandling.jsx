import { useRouteError, Link } from "react-router-dom";

const Errorhandling = () => {
  const handleError = useRouteError();

  return (
    <div>
      {handleError.message} <br />
      Go to <Link to="/" style={{color: "red"}}>Home</Link>
    </div>
  );
};

export default Errorhandling;
