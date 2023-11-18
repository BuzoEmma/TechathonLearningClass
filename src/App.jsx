import Button from "./pages/Button";
import ClasssCaptain from "./pages/ClasssCaptain";
import Distructure from "./pages/Distructure";
import Eventhandle from "./pages/Eventhandle";
import Formvalidation from "./FormValidation/Formvalidation";
import Order1 from "./HighOrder/Order1";
import Order2 from "./HighOrder/Order2";
import ReactHookForm from "./pages/ReactHookForm";
import Reducers from "./pages/Reducers";
import Rendering from "./pages/Rendering";
import SecondDistructure from "./pages/SecondDistructure";
import { useState } from "react";
import { NumberProvider } from "./Usecontext/ReactContext";
import FetchMethod from "./Components/FetchingData/FetchMethod";
import FetchWithaxios from "./Components/FetchingData/FetchWithaxios";
import FetchSwr from "./Components/FetchingData/FetchSwr";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Home from "./React-Router-Dom/Home";
import About from "./React-Router-Dom/About";
import NavBar from "./React-Router-Dom/NavBar";
import HelpUs from "./React-Router-Dom/HelpUs";
import Faq from "./React-Router-Dom/Faq";
import Contact from "./React-Router-Dom/Contact";
import UserFetchData from "./React-Router-Dom/UserFetchData";
import UserFetcher, { userInfor } from "./React-Router-Dom/UserFetcher";
import UserDetails, { userDetails } from "./React-Router-Dom/UserDetails";
import ErrorPage from "./React-Router-Dom/ErrorPage";
import Profile from "./React-Router-Dom/Profile";
import Login from "./React-Router-Dom/Login";
import RequiredAuth from "./React-Router-Dom/RequiredAuth";
import Errorhandling from "./React-Router-Dom/Errorhandling";
import Create from "./CrudOperation/Create";
import Update from "./CrudOperation/Update";
import Read from "./CrudOperation/Read";
import Home from "./CrudOperation/Home";

// const App = () => {
//   const Root = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<NavBar />}>
//         <Route index element={<Home />} />
//         <Route
//           path="about"
//           element={
//             <RequiredAuth>
//               <About />
//             </RequiredAuth>
//           }
//         />

//         <Route path="help" element={<HelpUs />}>
//           <Route path="faq" element={<Faq />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>

//         <Route
//           path="userfetchdata"
//           element={<UserFetchData />}
//           errorElement={<Errorhandling />}
//         >
//           <Route index element={<UserFetcher />} loader={userInfor} />
//           <Route path=":id" element={<UserDetails />} loader={userDetails} />
//         </Route>

//         <Route
//           path="profile"
//           element={
//             <RequiredAuth>
//               <Profile />
//             </RequiredAuth>
//           }
//         />
//         <Route path="login" element={<Login />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Route>
//     )
//   );

//   return (
//     <h1>
//       <RouterProvider router={Root} />
//     </h1>
//   );
// };

// export default App;

{
  /* <h1>Hello World</h1> */
}
{
  /* <Reducers /> */
}

{
  /* <Eventhandle  />
      <Rendering/> */
}
{
  /* <Order1 /> */
}
{
  /* <Order2/> */
}

{
  /* <Formvalidation /> */
}
{
  /* <ReactHookForm/> */
}

{
  /* <NumberProvider> */
}

{
  /* <Distructure /> */
}
{
  /* <SecondDistructure /> */
}
{
  /* <ClasssCaptain /> */
}

{
  /* </NumberProvider> */
}

{
  /* <FetchMethod/> */
}
{
  /* <FetchWithaxios/> */
}
{
  /* <FetchSwr/> */
}

const Root = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/read/:id" element={<Read />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={Root} />
    </div>
  );
};

export default App;
