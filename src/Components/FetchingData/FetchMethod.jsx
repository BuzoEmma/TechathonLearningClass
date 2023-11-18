import { useState, useEffect } from "react";

const FetchMethod = () => {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    // const fetchData = fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json().then((data) => setPosts(data)))
    //   .catch((err) => {
    //     console.log("Error fetching data:", err.message);
    //     setErrors("an error occured while fetching data");
    //   });

    // fetchData;

    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.log("Error fetching data:", err.message);
        setErrors("an error occured while fetching data");
      }
    };

    fetchData();

    return () => {
      fetchData();
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

export default FetchMethod;
