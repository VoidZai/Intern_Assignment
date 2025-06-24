import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
<div className="nav-bar">
      <img
        className="logo-2"
        alt="Logo"
        src="https://c.animaapp.com/mc8ufun6NECYwc/img/logo-2.svg"
      />

      <div className="menu">
        <div className="link-6">
          <div className="link-7">Platform</div>
        </div>

        <div className="link-6">
          <div className="link-7">Solutions</div>
        </div>

        <div className="link-6">
          <div className="link-7">Developers</div>
        </div>

        <div className="link-6">
          <div className="link-7">Resources</div>
        </div>

        <div className="link-6">
          <div className="link-7">Pricing</div>
        </div>
      </div>

      <div className="actions">
        <div className="link-8">
          <div className="link-9">Log in</div>
        </div>

        <button className="button-2">
          <div className="highlight-2" />

          <div className="text-3">Schedule a demo</div>
        </button>
      </div>
    </div>
  )
}

export default Navbar