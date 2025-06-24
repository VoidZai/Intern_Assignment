import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
/*   const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
 */
  return (
    <header className="nav-bar">
      <div className="nav-header">
        <img
          className="logo-2"
          alt="Logo"
          src="https://c.animaapp.com/mc8ufun6NECYwc/img/logo-2.svg"
        />

        <div className="mobile-actions">
          <div className="link-9">Log in</div>

{/*           <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
            <img
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/moon-icon.svg"
              alt="Toggle Dark Mode"
              className="dark-icon"
            />
          </button> */}

          <button className="button-2 gradient-button">
            <div className="highlight-2" />
            <div className="text-3">Schedule a demo</div>
          </button>
        </div>
      </div>

      <nav className="menu desktop-only">
        {['Platform', 'Solutions', 'Developers', 'Resources', 'Pricing'].map((item) => (
          <div className="link-6" key={item}>
            <div className="link-7">{item}</div>
          </div>
        ))}
      </nav>

      <div className="actions desktop-only">
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
