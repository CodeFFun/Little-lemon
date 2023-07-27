import { useNavigate } from 'react-router-dom'
import Food from '../icons_assets/restauranfood.jpg'

function Hero() {
  const navigate = useNavigate()

  const onClick =(e) => {
    e.preventDefault()
    navigate('/bookings')
  }
  return (
    <div className='Hero'>
        <div className="hero-info">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='btn' onClick={onClick}>Reserve a Table</button>
        </div>
        <div className="hero-pic">
            <img src={Food} alt="hero-pic" className='hero-img'/>
        </div>
    </div>
  )
}

export default Hero