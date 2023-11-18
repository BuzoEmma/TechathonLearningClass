import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  console.log(values);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h1>Add Users</h1>

      <form action="users" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label> &nbsp;
          <input
            style={{ border: "1px solid" }}
            type="text"
            name="name"
            id="name"
            placeholder="enter name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="name">Email:</label> &nbsp;
          <input
            style={{ border: "1px solid" }}
            type="email"
            name="email"
            id="email"
            placeholder="enter email"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="name">Phone:</label> &nbsp;
          <input
            style={{ border: "1px solid" }}
            type="number"
            name="phone"
            id="phone"
            placeholder="enter phone"
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button> &nbsp;
        <Link to={"/"}>Back</Link>
      </form>
    </div>
  );
};

export default Create;
