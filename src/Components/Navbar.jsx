import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/Products">Products</Link>&nbsp;&nbsp;
        {/* <Link to="/Details">Product details</Link> */}
    </div>
  )
}

export {Navbar}