import React from "react"
import SlideCard from "./SlideCard"

const SliderHome = ({url}) => {
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard url={url} />
        </div>
      </section>
    </>
  )
}

export default SliderHome
