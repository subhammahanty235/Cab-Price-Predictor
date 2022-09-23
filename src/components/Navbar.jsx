import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <nav className='navbar-main'>
        <div className="logo">
            <Link to='/' className="link"><span>Cab</span></Link> Fare Predictor
        </div>
        {/* <button className='oldsearches'>
            Old Searches
        </button> */}
    </nav>
  )
}

export default Navbar