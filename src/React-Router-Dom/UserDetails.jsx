import { color } from "framer-motion";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const fetcherDetails = useLoaderData();

  return (
    <div>
      UserDetails
      <div>
        <p style={{ color: "red" }}>{fetcherDetails.title}</p>
        {fetcherDetails.body}
      </div>
    </div>
  );
};

export default UserDetails;

export const userDetails = async ({ params }) => {
  const { id } = params;

  let res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  if(!res.ok){
    throw Error("Sorry We are not able to fetch this data details")
  }
  return res.json();
};
