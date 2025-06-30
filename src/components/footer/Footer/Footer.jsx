import { useState } from 'react';
import './Footer.css';
import FacebookIcon from './assets/facebook.svg';
import TwitterIcon from './assets/twitter.svg';
import LinkedInIcon from './assets/linkedin.svg';
import InstagramIcon from './assets/instagram.svg';
import GithubIcon from './assets/github.svg';

const Footer = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const menuSections = [
    {
      title: "Platform",
      links: [
        "Features", "Chat & Messaging", "Voice & Video Calls", 
        "Security & Compliance", "Extensions", "Features at a glance"
      ]
    },
    {
      title: "Solutions",
      links: [
        "By Use cases", "Social Community", "Marketplace", 
        "Healthcare", "Education", "Virtual Events"
      ]
    },
    {
      title: "Developers",
      links: [
        "Technologies documentation", "React", "Angular", 
        "Vue", "iOS Swift", "Android Kotlin"
      ]
    },
    {
      title: "Resources",
      links: [
        "Customer stories", "Blog", "Give feedback", 
        "Community forum", "Help center", "Partners"
      ]
    },
    {
      title: "Company",
      links: [
        "About us", "Careers", "Partners", 
        "Pricing", "Chat with us"
      ]
    }
  ];

  const socialIcons = [
    { icon: FacebookIcon, alt: "Facebook" },
    { icon: TwitterIcon, alt: "Twitter" },
    { icon: LinkedInIcon, alt: "LinkedIn" },
    { icon: InstagramIcon, alt: "Instagram" },
    { icon: GithubIcon, alt: "GitHub" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>cometchat</h1>
        </div>

        <div className="footer-menus">
          {menuSections.map((section, index) => (
            <div key={index} className="footer-menu-section">
              <button 
                className="menu-title"
                onClick={() => toggleMenu(index)}
                aria-expanded={activeMenu === index}
              >
                {section.title}
                <span className="menu-toggle">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <ul className={`menu-links ${activeMenu === index ? 'active' : ''}`}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            {socialIcons.map((social, index) => (
              <a key={index} href="#" aria-label={social.alt}>
                <img src={social.icon} alt={social.alt} />
              </a>
            ))}
          </div>
          <div className="footer-legal">
            <p>2023 © CometChat</p>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;