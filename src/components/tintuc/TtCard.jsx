import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Ddata from './Ttdata';
import './tintuc.css';
import axiosClient from './../../utils/http';

const Ttcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };
    const [data, setData] = useState([]);
    const fetchPost = async () => {
        try {
            const response = await axiosClient('news');
            setData(response.data);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <>
            <Slider {...settings}>
                {data.map((value) => {
                    return (
                        <>
                            <div className="box tintuc" key={value.id_news}>
                                <div className="img">
                                    <img
                                        src={`http://172.16.10.234/duan/admin_dasboard/upload/news/${value.image}`}
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
