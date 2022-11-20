import React from 'react';
import Danhmuc from './Danhmuc';
import ProductCart from './ProductCart';
import './product.css';
import Heading from '~/common/heading/Heading';

const Product = ({ addToCart, shopItems, productDetail, product_Detail }) => {
    return (
        <>
            <section className="shop background">
                <div className="container d_flex">
                    <Danhmuc />
                    <div className="contentWidth">
                        <Heading>Sản Phẩm</Heading>
                        <div className="product-content  gridsp">
                            <ProductCart
                                addToCart={addToCart}
                                shopItems={shopItems}
                                productDetail={productDetail}
                                product_Detail={product_Detail}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Product;
