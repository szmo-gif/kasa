import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/images/LOGO.png"
import './navBar.css'

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul>
      <img src={logo} alt="logo de kasa" /> 
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "active" : undefined}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "active" : undefined}
        >
          A propos</NavLink>
      </ul>
    </nav>
  )
}