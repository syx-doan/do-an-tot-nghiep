/* eslint-disable array-callback-return */
import React from 'react';

import classNames from 'classnames/bind';
import styles from './tintucchitiet.module.scss';
import { useState } from 'react';
import axiosClient from '~/utils/http';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
const Detail = ({ url }) => {
    const id_new = JSON.parse(sessionStorage.getItem('id-new'));

    const [data, setData] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await axiosClient('news');
            console.log(response)
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
            {data.map((item) => {
                if (item.id_news === id_new) {
                    return (
                        <>
                            <div className={cx('blog-slider', 'd-flex')}>
                                <div className={cx('blog-slider__img')}>
                                    <img src={`${url}/news/${item.image}`} alt="" />
                                </div>
                                <div className={cx('blog-slider__content')}>
                                    <span className={cx('blog-slider__code')}>{item.date}</span>
                                    <div className={cx('blog-slider__title')}>{item.title}</div>
                                    <div className={cx('blog-slider__text')}>{item.content}</div>
                                    <button href="#!" className={cx('blog-slider__button')}>
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                            ;
                        </>
                    );
                }
            })}
        </>
    );
};
export default Detail;
