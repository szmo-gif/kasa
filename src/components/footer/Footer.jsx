import logo from '../../assets/images/LOGO.png'
import './footer.css'

export default function footer() {
  return (
    <footer className="footer">
        <img src={logo} className="logo-footer" alt="logo kasa blanc" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}