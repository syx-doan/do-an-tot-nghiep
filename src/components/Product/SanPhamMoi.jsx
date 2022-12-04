import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '~/utils/http';

const SanPhamMoi = ({ detailPro, url, IdCate }) => {
    const [data, setData] = useState([]);

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
        <div className="col p-2-4 t-0 m-12">
            <div className="detail__product-right">
                <div className="detail__top-product--head">Sản Phẩm Bán Chạy</div>

                {data.map((val) => {
                    if (val.category_id === IdCate) {
                        return (
                            <a href className="detail__top-product--link">
                                <Link to="/product_detail">
                                    <img
                                        className="detail__top-img"
                                        src={`${url}${val.image}`}
                                        alt="Avatar"
                                        onClick={() => detailPro(val.id_product, val.category_id)}
                                    />
                                </Link>

                                <div className="detail__top-product--text">
                                    <h3 className="detail__top-product--name">{val.name}</h3>
                                    <div className="detail__top-price">
                                        <span className="detail__top-product--price">
                                            {val.price.toLocaleString('us-US')}
                                            <span className="vnd-class">₫</span>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        );
                    } else {
                        return (
                            <></>
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default SanPhamMoi;
