import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/images/LOGO.png"
import './navBar.css'

export default function NavBar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="logo de kasa" />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active" : undefined}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "active" : undefined}
          >
            A propos</NavLink>
        </li>
      </ul>
    </nav>
  )
}