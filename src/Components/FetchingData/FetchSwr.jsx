import { useState } from "react";
import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

const FetchSwr = () => {
  //   const [posts, setPosts] = useState([]);
  //   const [errors, setErrors] = useState(null);

  //   const { data: posts, error: errors } = useSWR(
  //     "https://jsonplaceholder.typicode.com/posts",
  //     fetcher
  //   );

  const { data: posts, error: errors } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    async (url) => {
      try {
        const res = await fetch(url);
        return res.json();
      } catch (err) {
        console.log(err);
      }
    }
  );

  return (
    <div>
      <h1>Fetching of data</h1>
      {errors ? (
        <p style={{ color: "red" }}>{errors}</p>
      ) : (
        <ul>
          {posts?.map((post) => (
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

export default FetchSwr;
