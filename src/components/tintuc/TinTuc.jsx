import React from "react"
import Ttcard from "./TtCard"
import iconNews from "../../assets/images/icons/news.png"
const TinTuc = () => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row1  f_flex'>
              <img src={iconNews} />
              <h2>Tin tức</h2>
            </div>
            <div className='heading-right row1 '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Ttcard />
        </div>
      </section>
    </>
  )
}

export default TinTuc
