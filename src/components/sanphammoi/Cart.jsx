import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Ndata from './Ndata';
import styles from './sanphammoi.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Cart = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
    };
    return (
        <>
            <Slider {...settings} className='flash-deal'>
                {Ndata.map((value, index) => {
                    return (
                        <div className='card'>
                            <div className={cx('container')}>
                                <div className={cx('content')}>
                                    <h1>{value.name}</h1>
                                    <h3>
                                        I love designing websites and keep things as simple as
                                        possible. My goals is to focus on minimalism and conveying
                                        the message that you want to send
                                    </h3>
                                </div>
                                <div className={cx('flap')} />
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </>
    );
};

export default Cart;
