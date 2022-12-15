import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import axiosClient from '~/utils/http';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './tintuc.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Ttcard = ({ handleTinTuc, url }) => {
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
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
    };
    return (
        <>
            <Slider {...settings}>
                {data.map((value, index) => {
                    return (
                        <div>
                            <div className={cx('wrapper')}>
                                <div className={cx('container')}> 
                                    <div className={cx('top')}>
                                     <div className={cx('"imagetintuc"')}>
                                       <Link to={'tintuc'}>
                                            <img
                                                src={`${url}/news/${value.image}`}
                                                alt=""
                                                onClick={() => handleTinTuc(value.id_news)}
                                            />
                                       </Link>
                                    </div>
                                    </div>
                                    <div className={cx('bottom')}>
                                        <div className={cx('left')}>
                                            <div className={cx('details')}>
                                                <h6>{value.title}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('inside')}>
                                        <div className={cx('icon')}>
                                        <i class="fa-solid fa-eye"></i>
                                        </div>
                                        <div className={cx('contents')}>
                                            <table>{value.content}</table>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        </div>
                    );
                })}
            </Slider>
        </>
    );
};

export default Ttcard;
