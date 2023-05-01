import { Link } from 'react-router-dom'
import logo from '../icons_assets/Logo.svg'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-img">
          <img src={logo} alt="LL" />
        </div>
        <div className="footer-nav">
          <h3>Doormat Navigation</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>About</Link></li>
              <li><Link to='/'>Menu</Link></li>
              <li><Link to='/'>Order online</Link></li>
              <li><Link to='/'>Reservation</Link></li>
              <li><Link to='/'>Login</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contacts</h3>
          <ul>
            <li><Link>Address</Link></li>
            <li><Link>Phone number</Link></li>
            <li><Link>Email</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Social Media Links</h3>
            <ul>
              <li><Link>Facebook</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer