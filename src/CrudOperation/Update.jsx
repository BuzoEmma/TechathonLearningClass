import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users/" + id);
        console.log(res.data)
        setValues(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();

    return () => {
      fetchData();
    };
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id,  values)
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
      <h1>Update Your Post</h1>

      <form action="users" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label> &nbsp;
          <input
            style={{ border: "1px solid" }}
            type="text"
            name="name"
            id="name"
            value={values.name}
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
            value={values.email}
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
            value={values.phone}
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

export default Update;
