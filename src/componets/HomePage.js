import React from "react";
import '../App.css';
import { AiTwotoneHome}from "react-icons/ai";
import {AiOutlineUser }from "react-icons/ai";
import { FaStreetView } from "react-icons/fa";

function HomePage(){
    return(
        <div>
        <div className="home-page">
            <div className="home-page-text">
            <h4 className="home-page-h4">Cleaning your <br></br>worries <span>away.</span></h4>
            <p className="home-page-p">We are the best budget affordable <br></br>cleaning company in lowa, USA</p>
            
            </div>
            <div className="home-page-img">
                <img src="./images/clean-removebg-preview 1.png"/>

            </div>
            <h5 className="home-h5"> WHY HIRE US</h5>
        </div>
        
            <div className="home-us">
                <div className="home-div-1">< AiTwotoneHome/><h6>Reliable</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non urna mi. Duis hendrerit sed dolor quis tempus. Vestibulum gravida</p>
                
                </div>
                <div className="home-div-2"><AiOutlineUser/><h6>Affordable</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non urna mi. Duis hendrerit sed dolor quis tempus. Vestibulum gravida</p>
                </div>
                <div className="home-div-3"><FaStreetView/><h6>Professional</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non urna mi. Duis hendrerit sed dolor quis tempus. Vestibulum gravida</p>
                </div>
                

            </div>
        </div>
    )
}







export default HomePage