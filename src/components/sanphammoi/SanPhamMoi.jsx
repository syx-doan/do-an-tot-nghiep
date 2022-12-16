/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import Cart from "./Cart"
import "./newsanpham.scss"
import iconNew from "../../assets/images/icons/new.png"

const NewSanPham = ( {url, addToCart, detailPro} ) => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row1  f_flex'>
              <img src={iconNew} />
              <h2>Sản phẩm mới</h2>
            </div>
          </div>

          <Cart url={url} addToCart={addToCart} detailPro={detailPro} />
        </div>
      </section>
    </>
  )
}

export default NewSanPham;