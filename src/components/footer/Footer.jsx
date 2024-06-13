import logo from '../../assets/images/LOGO.png'
import './footer.css'

export default function footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={logo} className="logo-footer" alt="logo kasa blanc" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  )
}