import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axiosClient from '~/utils/http';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ url, detailPro }) => {
    const [data, setData] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await axiosClient('newproducts');
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <>
            <div className="content grid3 product">
                {data.map((val, index) => {
                    return (
                    
                        <figure className="snip1278">
                            <h4></h4>
                            <div className="image">
                                <img
                                    src={`${url}/product/${val.image}`}
                                    alt="sq-sample6"
                                />
                            </div>
                            <div className="rating">
                                <i className="ion-ios-star" />
                                <i className="ion-ios-star" />
                                <i className="ion-ios-star" />
                                <i className="ion-ios-star" />
                                <i className="ion-ios-star-outline" />
                            </div>
                            <figcaption>
                                <p>{val.name}</p>
                                <div className="price">
                                    <s>{val.price}</s>
                                </div>
                            </figcaption>
                            <a href="#" className="add-to-cart">
                                Add to Cart
                            </a>
                        </figure>
                    );
                })}
            </div>
        </>
    );
};

export default Cart;
