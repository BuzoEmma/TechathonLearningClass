import { userAuth } from "./Authentication";

const About = () => {
  const myName = userAuth();

  return <div>Hello this is about us page: {myName.user}</div>;
};

export default About;
