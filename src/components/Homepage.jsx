import React from 'react'
import TextField from '@mui/material/TextField'
import { FaWalking } from 'react-icons/fa';
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api'
import './hompage.css'
import { useState } from 'react';
import Cabs from './Cabs';
import Footer from './Footer';
import Uber from '../images/img-uber2.webp'
const center = { lat: 48.8584, lng: 2.2945 }
function Homepage() {
    const [] = useState()
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_KEY_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],

    })
    if (!isLoaded) {
        return <p>Loading</p>
    }
    return (

        <div>
            <div className="container">
                {/* <h4 className="text-center">Fill Details and Find The Best Cab</h4> */}
                <div className="textareas">


                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><FaWalking /></span>
                        <Autocomplete>
                            <input type="text" class="form-control inpw" placeholder="Pickup Location" aria-label="Username" aria-describedby="basic-addon1" />

                        </Autocomplete>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><FaWalking /></span>
                        <Autocomplete>
                            <input type="text" class="form-control inpw" placeholder="Pickup Location" aria-label="Username" aria-describedby="basic-addon1" />

                        </Autocomplete>
                        {/* <input type="text" class="form-control" placeholder="Pickup Location" aria-label="Username" aria-describedby="basic-addon1" /> */}
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><FaWalking /></span>
                        <input type="text" class="form-control" placeholder="Pickup Location" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><FaWalking /></span>
                        <input type="time" class="form-control" placeholder="Pickup Location" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="submitbutton">
                    <button className="sbmtbtn">Get Cabs</button>
                </div>
            </div>



            <div className="container">
                <div className="infos">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Total Distance : 320km</span>
                        </div>

                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Total Time needed : 6 hours</span>
                        </div>

                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Time Category : Morning</span>
                        </div>

                    </div>
                </div>
                <div className="map">
                    {isLoaded && <GoogleMap center={center} zoom={15} mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '20px' }} options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                        keyboardShortcuts: false,

                    }}>
                        <Marker position={center} />
                    </GoogleMap>

                    }
                </div>

                <hr />
                <div id="container">
                    <h3 className='text-center'>Available Cabs and Fares</h3>
                    <hr />
                    <Cabs name="Uber" logo={Uber} price="4000"/>
                </div>

            </div>

        <Footer/>
        </div>

    )
}

export default Homepage