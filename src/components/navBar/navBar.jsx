import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/images/LOGO.png"
import './navBar.css'

export default function NavBar() {
  return (
    <div className="navBar">
      <img src={logo} alt="logo de kasa" />
      <nav>
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
      </nav>
    </div>
  )
}