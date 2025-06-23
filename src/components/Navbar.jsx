import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            SKINCARE
        </div>
        <ul className="nav-links">
            <li>All Products</li>
            <li>Serum</li>
            <li>Sunscreen</li>
            <li>Bundle</li>
            <li>Cart</li>
        </ul>
    </nav>
  )
}

export default Navbar