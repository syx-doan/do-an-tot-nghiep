/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '~/utils/http';
import BinhLuan from '../../BinhLuan/binhluan/BinhLuan';
import InfoShop from '../infoshop/InfoShop';
import Anhmota from '../anhmota/Anhmota';
import SanPhamLienQuan from '../sanphamlienquan/SanPhamLienQuan';

import classNames from 'classnames/bind';
import styles from './productdetail.module.scss';
const cx = classNames.bind(styles);

const Product_Detail = ({ addToCart, detailPro, url }) => {
    const [data, setData] = useState([]);

    const product_id = JSON.parse(sessionStorage.getItem('data-idproduct'));

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
    }, [data]);

    const [dau, setDau] = useState(200);
    const readMore = () => {
        if (dau === 200) {
            setDau(2000);
        } else {
            setDau(200);
        }
    };
    return (
        <>
            <div className={cx('f8wrapper')}>
                <div className={cx('f8product__container product__container-detail')}>
                    <div
                        className={cx(
                            'f8grid wide fix-wide-on-tablet f8product__container--padding',
                        )}
                    >
                        <div className={cx('f8row f8product__content')}>
                            <div className={cx('col p-5 t-12 m-12')}>
                                <div className={cx('product__content-left')}>
                                    {data.map((item) => {
                                        if (item.id_product === product_id) {
                                            return (
                                                <img
                                                    className={cx('mb-5')}
                                                    src={`${url}/product/${item.image}`}
                                                    alt=""
                                                />
                                            );
                                        } else {
                                            return <></>;
                                        }
                                    })}

                                    <Anhmota url={url} IdPro={product_id} />
                                    <div className={cx('product__content-action mt-5')}>
                                        <div className={cx('product__content--share')}>
                                            <span className={cx('product__content-share--text')}>
                                                <p>Chia s???:</p>
                                            </span>
                                            <button
                                                className={cx(
                                                    'product__content-share-icon content-icon--mess',
                                                )}
                                            />
                                            <button
                                                className={cx(
                                                    'product__content-share-icon content-icon--facebook',
                                                )}
                                            />
                                            <button
                                                className={cx(
                                                    'product__content-share-icon content-icon--pinterest',
                                                )}
                                            />
                                            <button
                                                className={cx(
                                                    'product__content-share-icon content-icon--twitter',
                                                )}
                                            />
                                        </div>
                                        <span className={cx('product__content-border--mid')} />
                                        <div className={cx('product__content--like')}>
                                            <svg width={24} height={20} className={cx('ELoIiZ')}>
                                                <path
                                                    d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                                                    stroke="#FF424F"
                                                    strokeWidth="1.5"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className={cx('product__content-like--text')}>
                                                <p> ???? th??ch (9.9k)</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('col p-7 t-12 m-12')}>
                                <div className={cx('product__content-right')}>
                                    <div className={cx('show-on-pc-mobile flex-head--product')}>
                                        <div className={cx('product__content-heading')}>
                                            <h3 className={cx('product__content-name')}>
                                                {data.map((item) => {
                                                    if (item.id_product === product_id) {
                                                        return <p>{item.name}</p>;
                                                    } else {
                                                        return <></>;
                                                    }
                                                })}
                                            </h3>
                                        </div>
                                        <div className={cx('product__content-price')}>
                                            <div className={cx('content-price--old')}>
                                                {data.map((item) => {
                                                    if (item.id_product === product_id) {
                                                        return (
                                                            <p>
                                                                {item.price.toLocaleString('us-US')}
                                                            </p>
                                                        );
                                                    } else {
                                                        return <></>;
                                                    }
                                                })}
                                                <span class="vnd-class">
                                                    <p>???</p>
                                                </span>
                                            </div>
                                            <div className={cx('content-price--new')}>
                                                {data.map((item) => {
                                                    if (item.id_product === product_id) {
                                                        return (
                                                            <p>
                                                                {(
                                                                    (item.price *
                                                                        (100 - item.sale)) /
                                                                    100
                                                                ).toLocaleString('us-US')}
                                                            </p>
                                                        );
                                                    } else {
                                                        return <></>;
                                                    }
                                                })}
                                                <span class="vnd-class">
                                                    <p>???</p>
                                                </span>
                                            </div>
                                            {data.map((item) => {
                                                if (item.id_product === product_id) {
                                                    return (
                                                        <div
                                                            className={cx(
                                                                'content-price--discount',
                                                            )}
                                                        >
                                                            {item.sale}% GI???M
                                                        </div>
                                                    );
                                                } else {
                                                    return <></>;
                                                }
                                            })}
                                        </div>
                                    </div>
                                    <div className={cx('product__content-body hide-on-mobile')}>
                                        <div className={cx('product__content-info')}>
                                            <div className={cx('content-info--title')}>
                                                <p>M?? t???</p>
                                            </div>
                                            <div className={cx('content-info--body')}>
                                                <span className={cx('content-info--text')}>
                                                    {data.map((item) => {
                                                        if (item.id_product === product_id) {
                                                            return (
                                                                <p>
                                                                    {item.description.substr(
                                                                        0,
                                                                        dau,
                                                                    )}
                                                                </p>
                                                            );
                                                        } else {
                                                            return <></>;
                                                        }
                                                    })}
                                                </span>
                                                <a href className={cx('content-info--link')}>
                                                    <p onClick={() => readMore()}>Xem th??m</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('product__content-cart')}>
                                        {data.map((item) => {
                                            if (item.id_product === product_id) {
                                                return (
                                                    <button
                                                        className={cx('content-cart-text')}
                                                        onClick={() => addToCart(item)}
                                                    >
                                                        <p>
                                                            <i
                                                                className={cx(
                                                                    'content-cart-icon fas fa-cart-plus',
                                                                )}
                                                            />
                                                            Th??m v??o gi??? h??ng
                                                        </p>
                                                    </button>
                                                );
                                            } else {
                                                return <></>;
                                            }
                                        })}
                                        <Link to="/cart">
                                            {data.map((item) => {
                                                if (item.id_product === product_id) {
                                                    return (
                                                        <button
                                                            className={cx('content-buy-text')}
                                                            onClick={() => addToCart(item)}
                                                        >
                                                            <p>Mua lu??n</p>
                                                        </button>
                                                    );
                                                } else {
                                                    return <></>;
                                                }
                                            })}
                                        </Link>
                                    </div>
                                    <div className={cx('product__content-slow')}>
                                        <span className={cx('content-hr')} />
                                        <div
                                            className={cx(
                                                'content-refund content-refund__free-refund',
                                            )}
                                        >
                                            <i
                                                className={cx(
                                                    'content-refund--icon fas fa-history',
                                                )}
                                            />
                                            <h3 className={cx('refund-text show-on-mobile')}>
                                                <p>Mi???n ph?? tr??? h??ng</p>
                                            </h3>
                                            <h3 className={cx('refund-text show-on-pc')}>
                                                <p>7 ng??y mi???n ph?? tr??? h??ng</p>
                                            </h3>
                                            <div className={cx('content-refund--detail-free')}>
                                                <div className={cx('refund-detail__header')}>
                                                    <p>
                                                        Ho??n to??n y??n t??m khi mua h??ng ??? Shopee Mall
                                                        v???i ??u ????i mi???n ph?? tr??? h??ng l??n ?????n 7 ng??y.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('content-refund content-refund__real')}>
                                            <i
                                                className={cx(
                                                    'content-refund--icon fas fa-shield-alt',
                                                )}
                                            />
                                            <h3 className={cx('refund-text show-on-pc')}>
                                                <p>H??ng ch??nh h??ng 100%</p>
                                            </h3>
                                            <h3 className={cx('refund-text show-on-mobile')}>
                                                <p>Ch??nh h??ng 100%</p>
                                            </h3>
                                            <div className={cx('content-refund--detail-real')}>
                                                <div className={cx('refund-detail__header')}>
                                                    <p>
                                                        Nh???n l???i g???p ????i s??? ti???n m?? b???n ???? thanh
                                                        to??n cho s???n ph???m kh??ng ch??nh h??ng t??? Shopee
                                                        Mall.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={cx(
                                                'content-refund content-refund__free-ship',
                                            )}
                                        >
                                            <i
                                                className={cx(
                                                    'content-refund--icon fas fa-shipping-fast',
                                                )}
                                            />
                                            <h3 className={cx('refund-text show-on-pc')}>
                                                <p>Mi???n ph?? v???n chuy???n</p>
                                            </h3>
                                            <h3 className={cx('refund-text show-on-mobile')}>
                                                <p>Giao mi???n ph??</p>
                                            </h3>
                                            <div className={cx('content-refund--detail-ship')}>
                                                <div className={cx('refund-detail__header')}>
                                                    <p>
                                                        ??u ????i mi???n ph?? v???n chuy???n l??n t???i 40,000
                                                        VN?? cho ????n h??ng c???a Shopee Mall t??? 150,000
                                                        VN??.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cx('shop__content')}>
                            <InfoShop />
                        </div>

                        <div className={cx('f8row detail__product sm-gutter')}>
                            <BinhLuan url={url} />

                            <SanPhamLienQuan detailPro={detailPro} url={url} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Product_Detail;
