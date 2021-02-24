import React from "react"
import { Button } from "../ButtonElement"
import "./HeroSection.css"
function HeroSection(props) {
  return (
    <div className="hero-container">
      <h1>Travel more</h1>
      <p>Plan your next trip today</p>
      <div className="hero-btns">
        <Button primary big fontBig>
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
