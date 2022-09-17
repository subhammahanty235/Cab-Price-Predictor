import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <nav className='navbar-main'>
        <div className="logo">
            <span>Cab</span> Fare Predictor
        </div>
        <button className='oldsearches'>
            Old Searches
        </button>
    </nav>
  )
}

export default Navbar