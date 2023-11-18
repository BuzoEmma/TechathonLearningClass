import { Link, Outlet } from "react-router-dom"


const HelpUs = () => {
  return (
    <div>
        <Link to={"faq"}>FAQ</Link> &nbsp;
        <Link to={"contact"}>contact</Link>

        <Outlet/>
    </div>
  )
}

export default HelpUs