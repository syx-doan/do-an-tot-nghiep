import React from "react"
import Dcard from "./Dcard"

const Discount = () => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row1  f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
              <h2>Giảm giá lớn</h2>
            </div>
            <div className='heading-right row1 '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
