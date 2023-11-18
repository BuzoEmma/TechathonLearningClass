import { Link } from "react-router-dom"


const ErrorPage = () => {
  return (
    <div>
        Page not found Oyia to another page my <br /> good friend,
       got to <Link to={"/"} style={{color: "red"}}>Home</Link>
    </div>
  )
}

export default ErrorPage