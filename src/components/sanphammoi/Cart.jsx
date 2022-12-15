/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axiosClient from '~/utils/http';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Cart = ({ url, addToCart, detailPro }) => {
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

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <>
            <div>
                <Slider {...settings}>
                    {data.map((val, index) => {
                        return (
                            <figure className="snip1278">
                                <div className="image">
                                    <Link to="/product_detail">
                                        <img
                                            src={`${url}/product/${val.image}`}
                                            alt="sq-sample6"
                                            onClick={() =>
                                                detailPro(val.id_product, val.category_id)
                                            }
                                        />
                                    </Link>
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
                                <a className="add-to-cart" onClick={() => addToCart(val)}>
                                    Add to Cart
                                </a>
                            </figure>
                        );
                    })}
                </Slider>
            </div>
        </>
    );
};

export default Cart;
