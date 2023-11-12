import { Link } from 'react-router-dom';
import '../styles/Header.css';


function Navigation(){
    return(
        <>
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
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          
        </ul>
        </>
    )
}

export default Navigation;