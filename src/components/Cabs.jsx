import React from 'react'
import uber from '../images/img-uber2.webp'
import './cabs.css'


function Cabs(props) {
  const {logo , name , price} = props;
  return (
    <div className="cabs-box">
        <div className="cabinfo">
            <img src={logo} alt="uber" />
            <h2>{name}</h2>

        </div>
        <div className="price">
           Price: <span>{price}</span>
        </div>
    </div>
  )
}

export default Cabs