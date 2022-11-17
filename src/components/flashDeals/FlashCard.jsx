import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn " onClick={onClick}>
            <button className="next ">
                <i className="fa fa-long-arrow-alt-right d-flex alight-item-center justify-content-center"></i>
            </button>
        </div>
    );
};
const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-left d-flex alight-item-center justify-content-center"></i>
            </button>
        </div>
    );
};
const FlashCard = ({ productItems, addToCart }) => {
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
        autoplay: true,
    };

    return (
        <>
            <Slider {...settings} className="flash-deal">
                {productItems.map((productItems, index) => {
                    return (
                        <div className="card" key={productItems.id_product}>
                            <span className="discount">{productItems.discount}% Off</span>
                            <img src={productItems.cover} className="card-img-top" alt="..." />
                            <div className="product-like">
                                <label>{count}</label> <br />
                                <i class="fa-solid fa-heart" onClick={increment}></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title product-name">{productItems.name}</h5>

                                <div className="d-flex justify-content-between mt-2">
                                    <p className="price">Giá tiền: {productItems.price}.đ</p>

                                    <button
                                        className="btn-add"
                                        href="!#"
                                        onClick={() => addToCart(productItems)}
                                    >
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </>
    );
};

export default FlashCard;
