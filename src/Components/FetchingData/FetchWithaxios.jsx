import axios from "axios";
import { useEffect, useState } from "react";

const FetchWithaxios = () => {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    //   const axiosFetch = axios.get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {setPosts(response.data)})

    //   .catch((err) => {
    //         console.log("Error fetching data:", err.message);
    //         setErrors("an error occured while fetching data");
    //       });

    const axiosFetch = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/post"
        );
        setPosts(res.data);
      } catch (err) {
        console.log("Error fetching data:", err.message);
        setErrors("an error occured while fetching data");
      }
    };
    axiosFetch();

    return () => {
      axiosFetch();
    };
  }, [posts, errors]);

  return (
    <div>
      <h1>Fetching of data</h1>
      {errors ? (
        <p style={{ color: "red" }}>{errors}</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchWithaxios;
