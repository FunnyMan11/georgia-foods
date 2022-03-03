import React, {useState} from 'react'
import {Link} from "react-router-dom"
import logo from "../assests/logo.png"
import "../styles/Navbar.css"
import {FaAlignJustify} from "react-icons/fa"


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div>
       <div className="navbar">
           <div className="leftSide" id={openLinks ? "open" : "close"}>
           <img src={logo} alt="" />
              <div className="hiddenLinks">
              <Link to="/">Home</Link>
                <Link to="/">Menu </Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
              </div>
           </div>
           <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/">Menu </Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <button onClick={toggleNavbar}>
                    <FaAlignJustify />
                </button>
           </div>
       </div>
    </div>
  )
}

export default Navbar