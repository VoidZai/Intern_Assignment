import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create stars for the background
    const newStars = [];
    for (let i = 0; i < 100; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 5 + 3 + 's',
        delay: Math.random() * 5 + 's'
      });
    }
    setStars(newStars);
  }, []);

  return (
    <section className="hero">
      <div className="stars">
        {stars.map(star => (
          <div 
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDuration: star.duration,
              animationDelay: star.delay,
              '--duration': star.duration
            }}
          />
        ))}
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Join the CometChat partner universe</h1>
          <p className="hero-subtitle">
            Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!
          </p>
          
          <div className="hero-form">
            <h2 className="form-title">Become a partner</h2>
            
            <form className="partner-form">
              <div className="form-group">
                <label htmlFor="full-name">Full name</label>
                <input 
                  type="text" 
                  id="full-name" 
                  placeholder="Type your name here..." 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Type your email here..." 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company name</label>
                <input 
                  type="text" 
                  id="company" 
                  placeholder="Type your company's name" 
                />
              </div>
              
              <button type="submit" className="submit-btn">Submit application</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;