import React from 'react';
import Catg from './Catg';
import ShopCart from './ShopCart';
import './shop.css';
const Shop = ({ addToCart, detailPro, CategoryId, categoryid, setCategory, url }) => {
    return (
        <>
            <section className="shop background">
                <div className="container d_flex">
                    <Catg CategoryId={CategoryId} />
                    <div className="contentWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row1  f_flex">
                                <h2>Sản phẩm</h2>
                            </div>
                            <div className="heading-right row1 ">
                                <span onClick={() => setCategory()}>View all</span>
                                <i className="fa-solid fa-caret-right"></i>
                            </div>
                        </div>
                        <div className="product-content  grid1">
                            <ShopCart
                                addToCart={addToCart}
                                detailPro={detailPro}
                                categoryid={categoryid}
                                url={url}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
