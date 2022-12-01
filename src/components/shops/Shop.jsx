import React from 'react';
import Catg from './Catg';
import ShopCart from './ShopCart';
import './shop.css';
import { useState } from 'react';
const Shop = ({ addToCart, detailPro, CategoryProduct, categoryid, item }) => {
    return (
        <>
            <section className="shop background">
                <div className="container d_flex">
                    <Catg CategoryProduct={CategoryProduct} />
                    <div className="contentWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row1  f_flex">
                                <h2>Sản phẩm</h2>
                            </div>
                            <div className="heading-right row1 ">
                                <button>View all</button>
                                <i className="fa-solid fa-caret-right"></i>
                            </div>
                        </div>
                        <div className="product-content  grid1">
                            <ShopCart
                                addToCart={addToCart}
                                detailPro={detailPro}
                                CategoryProduct={CategoryProduct}
                                categoryid={categoryid}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
