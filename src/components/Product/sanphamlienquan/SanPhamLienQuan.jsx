import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '~/utils/http';

import classNames from 'classnames/bind';
import styles from './sanphamlienquan.scss';
const cx = classNames.bind(styles);

const SanPhamLienQuan = ({ detailPro, url }) => {
    const [data, setData] = useState([]);

    const category_id = JSON.parse(sessionStorage.getItem('data-category'));

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
    }, []);

    return (
        <div className={cx('col p-2-4 t-0 m-12')}>
            <div className={cx('detail__product-right')}>
                <div className={cx('detail__top-product--head')}>Sản Phẩm Bán Chạy</div>

                {data.map((val) => {
                    if (val.category_id === category_id) {
                        return (
                            <a href className={cx('detail__top-product--link')}>
                                <Link to="/product_detail">
                                    <img
                                        className={cx('detail__top-img')}
                                        src={`${url}/product/${val.image}`}
                                        alt="Avatar"
                                        onClick={() => detailPro(val.id_product, val.category_id)}
                                    />
                                </Link>

                                <div className={cx('detail__top-product--text')}>
                                    <h3 className={cx('detail__top-product--name')}>{val.name}</h3>
                                    <div className={cx('detail__top-price')}>
                                        <span className={cx('detail__top-product--price')}>
                                            {val.price.toLocaleString('us-US')}
                                            <span className={cx('vnd-class')}>₫</span>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        );
                    } else {
                        return <></>;
                    }
                })}
            </div>
        </div>
    );
};

export default SanPhamLienQuan;
