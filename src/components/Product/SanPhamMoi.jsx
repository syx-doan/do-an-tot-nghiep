import React, { useEffect, useState } from 'react';
import axiosClient from '~/utils/http';

const SanPhamMoi = () => {
    const [data, setData] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await axiosClient('newproducts');
            setData(response.data);
            // console.log(response.data);
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
                    return (
                        <a href className="detail__top-product--link">
                            <img
                                className="detail__top-img"
                                src={`http://172.16.10.111/admin_dasboard/upload/product/${val.image}`}
                                alt="Avatar"
                            />

                            <div className="detail__top-product--text">
                                <h3 className="detail__top-product--name">
                                    {val.name}
                                </h3>
                                <div className="detail__top-price">
                                    <span className="detail__top-product--price">
                                        {val.price.toLocaleString('us-US')}
                                        <span className="vnd-class">₫</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default SanPhamMoi;
