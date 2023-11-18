import { userAuth } from "./Authentication";

const Profile = () => {
  const myName = userAuth();

  return <div>Hello My Name is: {myName.user}</div>;
};

export default Profile;
