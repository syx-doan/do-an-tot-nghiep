import React from "react"
import "./mainPage.css"
import SliderHome from "./Slider"

const Home = ({url}) => {
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
          <SliderHome url={url} />
        </div>
      </section>
    </>
  )
}

export default Home
