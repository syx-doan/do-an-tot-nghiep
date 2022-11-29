import React, { useEffect, useState } from 'react';
import Catg from './Catg';
import ShopCart from './ShopCart';
import './shop.css';
import { Route, Routes, useParams } from 'react-router-dom';
import axiosClient from '~/utils/http';
import ShopCartCate from './ShopCartCate';
// const {id} = useParams();
const Shop = ({ addToCart, shopItems }) => {
    const [data, setData] = useState([]);
    const fetchPost = async () => {
        try {
            const response = await axiosClient('products');
            setData(response.data);
            // console.log(response.data)
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchPost();
        // fetchPost1();
    }, []);
    return (
        <>
            <section className="shop background">
                <div className="container d_flex">
                    <Catg />
                    <div className="contentWidth">
                        <div className="heading d_flex">
                            <div className="heading-left row1  f_flex">
                                <h2>Sản phẩm</h2>
                            </div>
                            <div className="heading-right row1 ">
                                <span>View all</span>
                                <i className="fa-solid fa-caret-right"></i>
                            </div>
                        </div>
                        <div className="product-content  grid1">
                        {/* <ShopCart addToCart={addToCart} shopItems={shopItems} /> */}

                            <Routes>
                                <Route path="/" element={<ShopCart addToCart={addToCart} shopItems={shopItems} />} />
                                {data.map((value) => (
                                    <Route path={`products/category_id/${value.category_id}`} element={<ShopCartCate />} />
                                 ))} 
                            </Routes>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
