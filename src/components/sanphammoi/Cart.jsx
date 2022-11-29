import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import axiosClient from '~/utils/http';
import { useState } from 'react';
import styles from './newsanpham.scss'

const cx = classNames.bind(styles);

const Cart = () => {
    const [data, setData] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
    };
    const fetchPost = async () => {
        try {
            const response = await axiosClient('newproducts');
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
            <div className="content grid3 product">
                {data.map((val, index) => {
                    return (
                        <div className="box" key={index}>
                            <div className="img">
                                <img
                                    src={`http://172.16.10.245/admin_dasboard/upload/product/${val.image}`}
                                    alt=""
                                />
                            </div>
                            <h5 className="d-flex justify-content-center mt-2">{val.name}</h5>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cart;
