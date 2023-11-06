import { Link } from "react-router-dom"
import '../styles/Header.css';
function Header() {

  return (
    <>
    

      <nav>
      <h1>Andres Cedillo Portafolio</h1>
        <ul className="navBar">
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>
          
        </ul>
      </nav>
    </>
  )
}

export default Header
