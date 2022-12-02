/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '~/utils/http';
import BinhLuan from '../BinhLuan/BinhLuan';
import InfoShop from './InfoShop';
import Product_Images from './Product_Images';
import SanPhamMoi from './SanPhamMoi';

const Product_Detail = ({ addToCart, detailPro, url, IdPro, IdCate }) => {
    const [data, setData] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await axiosClient('products');
            // console.log(response);
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
            <div className="f8wrapper">
                <div className="f8product__container product__container-detail">
                    <div className="f8grid wide fix-wide-on-tablet f8product__container--padding">
                        <div className="f8row f8product__content">
                            <div className="col p-5 t-12 m-12">
                                <div className="product__content-left">
                                    {data.map((item) => {
                                        if (item.id_product === IdPro) {
                                            return (
                                                <img
                                                    className="mb-5"
                                                    src={`${url}${item.image}`}
                                                    alt=""
                                                />
                                            );
                                        } else {
                                            return <></>;
                                        }
                                    })}

                                    <Product_Images url={url} IdPro={IdPro} />

                                    {/* icon */}
                                    <div className="product__content-action mt-5">
                                        <div className="product__content--share">
                                            <span className="product__content-share--text">
                                                Chia sẽ:
                                            </span>
                                            <button className="product__content-share-icon content-icon--mess" />
                                            <button className="product__content-share-icon content-icon--facebook" />
                                            <button className="product__content-share-icon content-icon--pinterest" />
                                            <button className="product__content-share-icon content-icon--twitter" />
                                        </div>
                                        <span className="product__content-border--mid" />
                                        <div className="product__content--like">
                                            <svg width={24} height={20} className="ELoIiZ">
                                                <path
                                                    d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                                                    stroke="#FF424F"
                                                    strokeWidth="1.5"
                                                    fill="none"
                                                    fillRule="evenodd"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <span className="product__content-like--text">
                                                Đã thích (9.9k)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-7 t-12 m-12">
                                <div className="product__content-right">
                                    <div className="show-on-pc-mobile flex-head--product">
                                        <div className="product__content-heading">
                                            <h3 className="product__content-name">
                                                {data.map((item) => {
                                                    if (item.id_product === IdPro) {
                                                        return <p>{item.name}</p>;
                                                    } else {
                                                        return <></>;
                                                    }
                                                })}
                                            </h3>
                                        </div>
                                        <div className="product__content-price">
                                            <div className="content-price--old">
                                                {data.map((item) => {
                                                    if (item.id_product === IdPro) {
                                                        return (
                                                            <p>
                                                                {item.price.toLocaleString('us-US')}
                                                            </p>
                                                        );
                                                    } else {
                                                        return <></>;
                                                    }
                                                })}
                                                <span class="vnd-class">₫</span>
                                            </div>
                                            <div className="content-price--new">
                                                {data.map((item) => {
                                                    if (item.id_product === IdPro) {
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
                                                <span class="vnd-class">₫</span>
                                            </div>
                                            {data.map((item) => {
                                                if (item.id_product === IdPro) {
                                                    return (
                                                        <div className="content-price--discount">
                                                            {item.sale}% GIẢM
                                                        </div>
                                                    );
                                                } else {
                                                    return <></>;
                                                }
                                            })}
                                        </div>
                                    </div>
                                    <div className="product__content-body hide-on-mobile">
                                        <div className="product__content-info">
                                            <div className="content-info--title">Mô tả</div>
                                            <div className="content-info--body">
                                                <span className="content-info--text">
                                                    {data.map((item) => {
                                                        if (item.id_product === IdPro) {
                                                            return <p>{item.description}</p>;
                                                        } else {
                                                            return <></>;
                                                        }
                                                    })}
                                                </span>
                                                <a href="#" className="content-info--link">
                                                    Xem thêm
                                                </a>
                                            </div>
                                        </div>

                                        <div className="product__content-count">
                                            <div className="content-count--title">Số lượng</div>
                                            <div className="content-count--control">
                                                <div className="content-count--item">
                                                    <button className="content-count--button">
                                                        <svg
                                                            enableBackground="new 0 0 10 10"
                                                            viewBox="0 0 10 10"
                                                            x={0}
                                                            y={0}
                                                            className="content-count-svg-icon"
                                                        >
                                                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
                                                        </svg>
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="content-count--input"
                                                        defaultValue={1}
                                                    />
                                                    <button className="content-count--button">
                                                        <svg
                                                            enableBackground="new 0 0 10 10"
                                                            viewBox="0 0 10 10"
                                                            x={0}
                                                            y={0}
                                                            className="content-count-svg-icon"
                                                        >
                                                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="content-count--item">
                                                    {data.map((item) => {
                                                        if (item.id_product === IdPro) {
                                                            return (
                                                                <p>
                                                                    {item.quantity} sản phẩm có sẵn
                                                                </p>
                                                            );
                                                        } else {
                                                            return <></>;
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product__content-cart">
                                        {data.map((item) => {
                                            if (item.id_product === IdPro) {
                                                return (
                                                    <button
                                                        className="content-cart-text"
                                                        onClick={() => addToCart(item)}
                                                    >
                                                        <i className="content-cart-icon fas fa-cart-plus" />
                                                        Thêm vào giỏ hàng
                                                    </button>
                                                );
                                            } else {
                                                return <></>;
                                            }
                                        })}
                                        <Link to="/cart">
                                            {data.map((item) => {
                                                if (item.id_product === IdPro) {
                                                    return (
                                                        <button
                                                            className="content-buy-text"
                                                            onClick={() => addToCart(item)}
                                                        >
                                                            Mua luôn
                                                        </button>
                                                    );
                                                } else {
                                                    return <></>;
                                                }
                                            })}
                                        </Link>
                                    </div>
                                    <div className="product__content-slow">
                                        <span className="content-hr" />
                                        <div className="content-refund content-refund__free-refund">
                                            <i className="content-refund--icon fas fa-history" />
                                            <h3 className="refund-text show-on-mobile">
                                                Miễn phí trả hàng
                                            </h3>
                                            <h3 className="refund-text show-on-pc">
                                                7 ngày miễn phí trả hàng
                                            </h3>
                                            <div className="content-refund--detail-free">
                                                <div className="refund-detail__header">
                                                    Hoàn toàn yên tâm khi mua hàng ở Shopee Mall với
                                                    ưu đãi miễn phí trả hàng lên đến 7 ngày.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-refund content-refund__real">
                                            <i className="content-refund--icon fas fa-shield-alt" />
                                            <h3 className="refund-text show-on-pc">
                                                Hàng chính hãng 100%
                                            </h3>
                                            <h3 className="refund-text show-on-mobile">
                                                Chính hãng 100%
                                            </h3>
                                            <div className="content-refund--detail-real">
                                                <div className="refund-detail__header">
                                                    Nhận lại gấp đôi số tiền mà bạn đã thanh toán
                                                    cho sản phẩm không chính hãng từ Shopee Mall.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-refund content-refund__free-ship">
                                            <i className="content-refund--icon fas fa-shipping-fast" />
                                            <h3 className="refund-text show-on-pc">
                                                Miễn phí vận chuyển
                                            </h3>
                                            <h3 className="refund-text show-on-mobile">
                                                Giao miễn phí
                                            </h3>
                                            <div className="content-refund--detail-ship">
                                                <div className="refund-detail__header">
                                                    Ưu đãi miễn phí vận chuyển lên tới 40,000 VNĐ
                                                    cho đơn hàng của Shopee Mall từ 150,000 VNĐ.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <InfoShop />

                        <div className="f8row detail__product sm-gutter">
                            <BinhLuan />

                            <SanPhamMoi detailPro={detailPro} url={url} IdCate={IdCate} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Product_Detail;
