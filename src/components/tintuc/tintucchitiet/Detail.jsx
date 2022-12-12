import React from 'react';

import classNames from 'classnames/bind';
import styles from './tintucchitiet.module.scss';

const cx = classNames.bind(styles);
const Detail = ({ productDetail, url }) => {
    return (
        <>
            {productDetail.map((item) => {
                return (
                    <>
                        <div className={cx('blog-slider', 'd-flex')}>
                            <div className={cx('blog-slider__img')}>
                                <img src={`${url}/news/${item.image}`} alt="" />
                            </div>
                            <div className={cx('blog-slider__content')}>
                                <span className={cx('blog-slider__code')}>26 December 2019</span>
                                <div className={cx('blog-slider__title')}>{item.title}</div>
                                <div className={cx('blog-slider__text')}>{item.content}</div>
                                <button href="#!" className={cx('blog-slider__button')}>
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
};
export default Detail;
