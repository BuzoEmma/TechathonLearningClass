import { Link, NavLink, Outlet } from "react-router-dom"
import "../App.css"
import { AuthProvider, userAuth } from "./Authentication"

const NavBar = () => {

  const auth = userAuth()

  return (
    <div className="navLink">
      <AuthProvider>
        <NavLink to="/" className="navList">Home</NavLink> &nbsp;
        <NavLink to="about" className="navList">About</NavLink> &nbsp;
        <NavLink to="help" className="navList">HelpUs</NavLink> &nbsp;
        <NavLink to="userfetchdata" className="navList">Userfetchdata</NavLink> &nbsp;
        <NavLink to="profile" className="navList">Profile</NavLink> &nbsp;
        {!auth.user  && <NavLink to="login" className="navList">Login</NavLink> }

        <Outlet/>
        </AuthProvider>
    </div>
  )
}

export default NavBar