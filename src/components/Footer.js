import React from 'react'
import "../styles/Footer.css"
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
             <FaFacebook /> 
             <FaTwitter /> 
             <FaInstagram />
             <FaLinkedin />
        </div>
        <p> 2021 georgianfood.com </p>
    </div>
  )
}

export default Footer