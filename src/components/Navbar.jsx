import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <header className="nav-bar">
      <img
        className="logo-2"
        alt="Logo"
        src="https://c.animaapp.com/mc8ufun6NECYwc/img/logo-2.svg"
      />

      <nav className="menu">
        {['Platform', 'Solutions', 'Developers', 'Resources', 'Pricing'].map((item) => (
          <div className="link-6" key={item}>
            <div className="link-7">{item}</div>
          </div>
        ))}
      </nav>

      <div className="actions">
        <div className="link-8">
          <div className="link-9">Log in</div>
        </div>

        <button className="button-2 gradient-button">
          <div className="highlight-2" />
          <div className="text-3">Schedule a demo</div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
