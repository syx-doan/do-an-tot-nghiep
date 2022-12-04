import React from "react"
import FlashCard from "./FlashCard"
import "./flashDeals.css"

const FlashDeals = ({ url, addToCart, detailPro }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Ưu đãi</h1>
          </div>
          <FlashCard url={url} addToCart={addToCart} detailPro={detailPro} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals