/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import Cart from "./Cart"
import "./newarriavals.css"
import iconNew from "../../assets/images/icons/new.png"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row1  f_flex'>
              <img src={iconNew} />
              <h2>New Arrivals </h2>
            </div>
            <div className='heading-right row1 '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
