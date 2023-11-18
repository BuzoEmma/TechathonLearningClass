import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users/" + id);
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

  return (
    <div style={{margin: "2rem"}}>
      <h1>Details of the CRUD Operation</h1>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
      <p>Phone: {data?.phone}</p>

      <div>
        <Link to={`/update/${data.id}`}>Edith</Link> &nbsp;
        <Link to={"/"}>Back</Link> &nbsp;
      </div>
    </div>
  );
};

export default Read;
