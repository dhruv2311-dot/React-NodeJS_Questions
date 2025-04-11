import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Product from './ProductDetail';
const Q12 = () => {
  return (
   <>
   <Router>
    <h2>Product List</h2>
    <ul>
        <li><Link to="/product/101"/>Product 101</li>
        <li><Link to="/product/102"/>Product 102</li>
        <li><Link to="/product/103"/>Product 103</li>
    </ul>
    <Routes>
        <Route path="/product/:id" element={<Product/>}/>

    </Routes>
   </Router>
   </>
  )
}

export default Q12
