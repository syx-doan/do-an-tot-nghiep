import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "./Ttdata"
import "./tintuc.css"

const Ttcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {Ddata.map((value, index) => {
          return (
            <>
              <div className='box tintuc' key={index}>
                <div className='img'>
                  <img src={value.cover} alt='' width='100' height='70px'/>
                </div>
                <h6>{value.name}</h6>
                <p>{value.describe}</p>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Ttcard
