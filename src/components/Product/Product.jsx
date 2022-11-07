import React from 'react'
import Danhmuc from './Danhmuc';
import ProductCart from './ProductCart';
import "./product.css"

const Product = ({ addToCart, shopItems }) => {
    return (
      <>
        <section className='shop background'>
          <div className='container d_flex'>
            <Danhmuc />
  
            <div className='contentWidth'>
              <div className='heading d_flex'>
                <div className='heading-left row1  f_flex'>
                  <h2>Sản phẩm</h2>
                </div>
              </div>
              <div className='product-content  gridsp'>
                <ProductCart addToCart={addToCart} shopItems={shopItems} />
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
export default Product;