import React from 'react'

import Comets from '../assets/Comets/Comets'
import Comets2 from '../assets/Comets2/Comets2'
import Comets3 from '../assets/Comets3/Comets3'
import Comets4 from '../assets/Comets4/Comets4'
import Mail01 from '../assets/Mail01/Mail01'
import '../styles/hero.css'

const Hero = () => {
  return (
    <div className="hero-form">
      <div className="overlap">
        <img
          className="texture"
          alt="Texture"
          src="https://c.animaapp.com/mc8ufun6NECYwc/img/texture.png"
        />

        <img
          className="mask-group"
          alt="Mask group"
          src="https://c.animaapp.com/mc8ufun6NECYwc/img/mask-group.png"
        />

        <div className="planet">
          <div className="overlap-group">
            <div className="ellipse" />

            <div className="ellipse-2" />

            <img
              className="subtract"
              alt="Subtract"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/subtract-3.svg"
            />
          </div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="ellipse-3" />

            <div className="ellipse-4" />

            <img
              className="img"
              alt="Subtract"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/subtract-1.svg"
            />
          </div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-3">
            <div className="ellipse-5" />

            <div className="ellipse-6" />

            <img
              className="subtract-2"
              alt="Subtract"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/subtract.svg"
            />
          </div>
        </div>

        <div className="gradient" />

        <div className="vignette" />

        <img
          className="stars"
          alt="Stars"
          src="https://c.animaapp.com/mc8ufun6NECYwc/img/stars.png"
        />

        <Comets3 className="comets-3" />
        <div className="blur-layer-heavy" />

        <Comets4 className="comets-4" />
        <img
          className="orbit"
          alt="Orbit"
          src="https://c.animaapp.com/mc8ufun6NECYwc/img/orbit.svg"
        />

        <img
          className="star"
          alt="Star"
          src="https://c.animaapp.com/mc8ufun6NECYwc/img/star.svg"
        />

        <div className="div-wrapper">
          <div className="overlap-3">
            <div className="ellipse-5" />

            <div className="ellipse-6" />

            <img
              className="subtract-2"
              alt="Subtract"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/subtract-2.svg"
            />
          </div>
        </div>

        <Comets className="comets-instance" />
        <div className="gradient-2" />

        <div className="form">
          <button className="button">
            <div className="highlight" />

            <div className="text">Submit application</div>
          </button>

          <div className="text-wrapper-5">Became a partner</div>

          <div className="input">
            <input className="div-5" placeholder="Full name" type="text" />

            <input
              className="input-2"
              placeholder="Type your name here..."
              type="text"
            />
          </div>

          <div className="input-3">
            <div className="text-wrapper-6">Email address</div>

            <div className="input-4">
              <Mail01 className="mail" />
              <div className="text-2">Type your emailsomething...</div>
            </div>
          </div>

          <div className="input-5">
            <input className="div-5" placeholder="Companies name" type="text" />

            <input
              className="input-2"
              placeholder="Type you company’s name"
              type="text"
            />
          </div>
        </div>

        <Comets2 className="comets-2" />
        <div className="title-description">
          <p className="p">Join the CometChat partner universe</p>

          <p className="text-wrapper-7">
            Create value for your clients, leveraging our world-class
            technology. Partner with us and grow your business!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero