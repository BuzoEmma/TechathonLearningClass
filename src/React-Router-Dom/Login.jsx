import { useState } from "react";
import { userAuth } from "./Authentication";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {

  const [userValue, setUserValue] = useState("");
  const user = userAuth();
  const naviage = useNavigate();
    const location = useLocation()

  // const locate = location.state.path || "/"

  const handleChange = (e) => {
    e.preventDefault();
    user.login(userValue);
    naviage("/profile", {replace:true});
  };

  return (
    <div style={{ margin: "2rem" }}>
      Login
      <form action="" onSubmit={handleChange}>
        <input
          onChange={(e) => setUserValue(e.target.value)}
          type="text"
          name=""
          id=""
          style={{ border: "1px solid" }}
        />
        <button type="submit"> Send</button>
      </form>
    </div>
  );
};

export default Login;
