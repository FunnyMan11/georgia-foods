import React from 'react'
import { Link } from "react-router-dom"
import BannerImage from "../assests/main.jpeg"
import "../styles/Home.css"


function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer">
            <h1 style={{fontWeight :"bold"}}>Food Corner</h1>
            <p> GEORGIAN FOOD AT A CLICK </p>
            <Link to="/">
                <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home