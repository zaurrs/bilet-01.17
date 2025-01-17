import React from 'react'
import "./Hero.scss"

const Hero = () => {
  return (
    <div>
      <div className="hero">
      <div className="container">
            <div className="row herooo">
                <div className="col-md-6 col-sm-12 bgImage">
                    <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp" alt="" />
                </div>
                <div className="col-md-6 col-sm-12 heroContainer">
                    <p className='discount'>60% Discount</p>
                    <h1>Winter</h1>
                    <h1>Collection</h1>
                    <p>Best Cloth Collection By 2020!</p>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
