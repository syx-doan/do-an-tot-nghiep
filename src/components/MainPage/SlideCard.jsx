import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axiosClient from './../../utils/http';

const SlideCard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axiosClient('slider');
                console.log(response);
                setData(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPost();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: '0px' }}>{dots}</ul>;
        },
    };
    return (
        <>
            <Slider {...settings}>
                {data.map((value, index) => {
                    return (
                        <>
                            <div className="box d_flex top" key={index}>
                                <div className="left">
                                    <h1>{value.title}</h1>
                                    <p>{value.description}</p>
                                    <button className="btn-primary buttontruycap">
                                        Truy cập Bộ sưu tập
                                    </button>
                                </div>
                                <div className="right">
                                    <img src={value.image} alt="" />
                                </div>
                            </div>
                        </>
                    );
                })}
            </Slider>
        </>
    );
};

export default SlideCard;
