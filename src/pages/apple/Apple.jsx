import React from 'react';

import Danhmuc from '../../components/Product/Danhmuc';

import ProductCart from '../../components/Product/ProductCart';
import Heading from './../../common/heading/Heading';

const Apple = ({ addToCart, shopItems }) => {
    return (
        <>
            <section className="shop background">
                <div className="container d_flex">
                    <Danhmuc />
                    <div className="contentWidth">
                        <Heading>Sản Phẩm</Heading>
                        <div className="product-content  gridsp">
                            <ProductCart addToCart={addToCart} shopItems={shopItems} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Apple;
