import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Ddata from "./Ttdata"
import './tintuc.css';
import { useState } from 'react';
import axiosClient from '~/utils/http';
import { useEffect } from 'react';

const Ttcard = () => {
    const [data, setData] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await axiosClient('news');
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
        slidesToShow: 4.5,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <Slider {...settings}>
                {data.map((value, index) => {
                    return (
                        <>
                            <div className="box tintuc" key={index}>
                                <div className="img">
                                    <img
                                        src={`http://172.16.10.239/admin_dasboard/upload/product/news/${value.image}`}
                                        alt=""
                                        width="100"
                                        height="70px"
                                    />
                                </div>
                                <h6>{value.title}</h6>
                                <p>{value.content}</p>
                            </div>
                        </>
                    );
                })}
            </Slider>
        </>
    );
};

export default Ttcard;
