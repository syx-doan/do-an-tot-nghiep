import React from 'react';
// import Danhmuc from './Danhmuc';
import ProductCart from './ProductCart';
import './product.css';
import Heading from '~/common/heading/Heading';
import Catg from '~/components/shops/Catg';
import ShopCart from '~/components/shops/ShopCart';

const Product = ({ addToCart, shopItems }) => {
    return (
        <>
            <section className="shop background">
                <div className="container d_flex">
                    <Catg />
                    <div className="contentWidth">
                        <Heading>Sản Phẩm</Heading>
                        <div className="product-content gridsp">
                            {/* <ProductCart addToCart={addToCart} shopItems={shopItems} /> */}
                            <ShopCart addToCart={addToCart} shopItems={shopItems} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Product;