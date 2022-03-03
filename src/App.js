import React from 'react'
import Navbar from "../src/components/Navbar.js"
import Footer from "./components/Footer.js"
import Home from "./pages/Home.js"
import Menu from "./pages/Menu.js"
import About from "./pages/About.js"
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App