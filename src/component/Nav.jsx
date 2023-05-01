import { Link} from 'react-router-dom'
import Logo from '../icons_assets/Logo .svg'

function Nav() {
  return (
   <>
      <div className="navbar">
        <img src={Logo} alt="littlelemon" />
        <ul className='nav-content'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Menu</Link></li>
            <li><Link to='/'>Order online</Link></li>
            <li><Link to='/'>Reservation</Link></li>
            <li><Link to='/'>Login</Link></li>
        </ul>
      </div>
   </>
  )
}

export default Nav