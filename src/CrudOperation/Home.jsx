import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users");
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();

    return () => {
      fetchData();
    };
  }, []);

  const deleteButton = (id) => {
    const confirm = window.confirm("Do you want to delete this?");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          console.log(res.data);
          location.reload()
        })
        .catch((res) => console.log(res.message));
    }
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h1>list of users</h1>
      <div>
        <Link
          to={"/create"}
          style={{
            backgroundColor: "blue",
            padding: "2px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Add +
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Name:</th>
            <th>Email:</th>
            <th>Phone:</th>
            <th>Action:</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td> &nbsp; &nbsp;
              <Link
                to={`/read/${user.id}`}
                style={{
                  backgroundColor: "blue",
                  padding: "2px",
                  color: "pink",
                  borderRadius: "5px",
                }}
              >
                Read
              </Link>{" "}
              &nbsp; &nbsp;
              <Link to={`/update/${user.id}`}>Edith</Link>&nbsp; &nbsp;
              <button
                style={{
                  backgroundColor: "blue",
                  padding: "2px",
                  color: "red",
                  borderRadius: "5px",
                }}
                onClick={() => deleteButton(user.id)}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
