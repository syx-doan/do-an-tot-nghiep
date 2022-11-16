import React from 'react'
import Heading from './../../../common/heading/Heading';
import ProductCart from '../../MainPage/Product/ProductCart';

function Tivi({addToCart,shopItems}) {
  return (
    <div>
        <Heading>Sản Phẩm</Heading>
              <div className='product-content  gridsp'>
                <ProductCart addToCart={addToCart} shopItems={shopItems} />
              </div>
    </div>
  )
}

export default Tivi