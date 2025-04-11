import React from 'react'
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom'
const Home = () =><h2>Welcome To Home</h2>
const About = () =><h2>Welcome To About</h2>
const Q11 = () => {
  return (
    <>
    <Router>
    <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </Router>
    </>
  )
}

export default Q11
