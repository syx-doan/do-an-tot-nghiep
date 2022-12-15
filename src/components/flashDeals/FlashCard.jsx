/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axiosClient from '~/utils/http';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-alt-right d-flex justify-content-center alight-item-center"></i>
            </button>
        </div>
    );
};
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-left d-flex justify-content-center alight-item-center"></i>
            </button>
        </div>
    );
};
const FlashCard = ({ url, addToCart, detailPro }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const [data, setData] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await axiosClient('products');
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
            <Slider {...settings} className="flash-deal">
                {data.map((item) => {
                    if (item.sale > 0) {
                        return (
                            <div className="card" key={item.id_product}>
                                <span className="discount">{item.sale}% Off</span>
                                <Link to="/product_detail">
                                    <img
                                        src={`${url}/product/${item.image}`}
                                        className="card-img-top"
                                        alt="..."
                                        onClick={() => detailPro(item.id_product, item.category_id)}
                                    />
                                </Link>
                                <div className="product-like">
                                    <label>{count}</label> <br />
                                    <i className="fa-regular fa-heart" onClick={increment}></i>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title product-name name-flash">
                                        {item.name}
                                    </h5>

                                    <div className="d-flex justify-content-between mt-2">
                                        <p className="price">
                                            <i class="fa-solid fa-fire mr-2"></i>Giảm tới:{' '}
                                            {((item.price * item.sale) / 100).toLocaleString(
                                                'us-US',
                                            )}{' '}
                                            đ
                                        </p>

                                        <button
                                            className="btn-add"
                                            href="!#"
                                            onClick={() => addToCart(item)}
                                        >
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </Slider>
        </>
    );
};

export default FlashCard;
