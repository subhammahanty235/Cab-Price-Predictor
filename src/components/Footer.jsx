import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer({hide}) {

  return (
    <div className={`${hide===true?'footer2':'footer'}`}>
        <h5 className="text">Made With ❤️ By <Link className='link' to='/profile'><span  className='sp'>Subham</span></Link></h5>
    </div>
  )
}

export default Footer