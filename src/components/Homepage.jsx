import React from 'react'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom';
import { FaWalking, FaUserFriends } from 'react-icons/fa';
import { BsSmartwatch } from 'react-icons/bs';
import { IoWalk } from 'react-icons/io5'
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api'
import './hompage.css'
import { useState, useEffect } from 'react';
import Cabs from './Cabs';
import Footer from './Footer';
import Uber from '../images/img-uber2.webp'
import Ola from '../images/ola-icon.webp'
import Meru from '../images/meru-logo.webp'
// import { useEffect } from 'react';
const center = { lat: 12.9716, lng: 77.5946 }
function Homepage() {
    const navi = useNavigate()
    if(!localStorage.getItem('panel-notice-app')){
        navi('/ntce')
    }
    const pl = ['places']
    const [hide, sethide] = useState(true);
    const [data, setData] = useState({ pickup:"", destinaton:"", passengers:0, time:'00:00' , tc:"" });
    // const [results , setResults] = useState({ distance:'0' , timeneeded:'0' , timecategory:"Morning" });
    // const [results , setResults] = useState({distance:'0', timeneeded:'0' , timecategory:'' })
    const [prices, setPrices] = useState({ uber: 0, ola: 0, meruCabs: 0 })

    const onFill = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const calculateCost = async() => {
        if (data.pickup === 'Bangalore' && data.destinaton === 'Hydrabad') {
            // setResults({distance:'575'})
            // setResults({timeneeded:'9'})

            if (data.time > '20' && data.time < '5') {
                setData({tc:"Night"})
                
            }
            else{
                setData({tc:"Morning"})
            }
            // console.log(results.distance+ "-->" + results.timeneeded)
            let km = 575;
            // for uber 
            const uberperKMCost = 30;
            const ubernightTimeExtra = 10;
            let uberprice = uberperKMCost * km;
            if (data.time > '20' && data.time < '5') {
                uberprice += ubernightTimeExtra;

            }

            //for ola
            const olaperKMCost = 33;
            const olanightTimeExtra = 12;
            // let km = 10;
            let olaprice = olaperKMCost * km;
            if (data.time > '20' && data.time < '5') {
                olaprice += olanightTimeExtra;
            }

            // for meruCabs
            const meruperKMCost = 32;
            const merunightTimeExtra = 13;
            // let km = 10;
            let meruprice = meruperKMCost * km;
            if (data.time > '20' && data.time < '5') {
                meruprice += merunightTimeExtra;
            }

            // saving the prices
            setPrices({ uber: uberprice, ola: olaprice, meruCabs: meruprice })
            sethide(false)
            console.log(prices.meruCabs)
        }
        else{
            alert("Please Use the mentioned Location  , For some card issues the API is not working . Please CoOperate")
        }




    }

    // useEffect(()=>{
    //     console.log(process.env.REACT_KEY_GOOGLE_MAPS_API_KEY)
    // },[])
    
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDs4hlm8nyUP9D5ICr1Q_ZuR8GSySZ1OQs",
        libraries: pl ,

    })
    if (!isLoaded) {
        return <p className='text-center'>Loading</p>
    }


    return (

        <div>
            <div className="container">
                {/* <h4 className="text-center">Fill Details and Find The Best Cab</h4> */}
                <div className="textareas">


                    <div class="input-group mb-3">
                        {/* <Autocomplete> */}
                        <span class="input-group-text" id="basic-addon1"><FaWalking /></span>

                        <input type="text" class="form-control inpw" placeholder="Pickup Location" value={data.pickup} name='pickup' onChange={onFill} />

                        {/* </Autocomplete> */}
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><IoWalk /></span>
                        {/* <Autocomplete> */}
                        <input type="text" class="form-control inpw" placeholder="Destination" value={data.destinaton} name='destinaton' onChange={onFill} />

                        {/* </Autocomplete> */}
                        {/* <input type="text" class="form-control" placeholder="Pickup Location" aria-label="Username" aria-describedby="basic-addon1" /> */}
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><FaUserFriends /></span>
                        <input type="number" class="form-control" name='passengers' value={data.passengers} onChange={onFill} placeholder="Total Passengers" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><BsSmartwatch /></span>
                        <input type="time" class="form-control" name='time' value={data.time} onChange={onFill} placeholder="current time" />
                    </div>
                </div>
                <div className="submitbutton">
                    <button className="sbmtbtn" onClick={calculateCost}>Get Cabs</button>
                </div>
            </div>



            <div className={`container ${hide === true ? 'd-none' : ''} `}>
                <div className="infos">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Total Distance : 575 km</span>
                        </div>

                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Total Time needed : 9:4 hrs</span>
                        </div>

                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Time Category : {data.tc}</span>
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
                    <h3 className='text-center abcf'>Available Cabs and Fares</h3>
                    <hr />
                    <Cabs name="Uber" logo={Uber} price={prices.uber} />
                    <Cabs name="OLA" logo={Ola} price={prices.ola} />
                    <Cabs name="MeruCabs" logo={Meru} price={prices.meruCabs} />
                </div>

            </div>

            <Footer hide={hide} />
        </div>

    )
}

export default Homepage