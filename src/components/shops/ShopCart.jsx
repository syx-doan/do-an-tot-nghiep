/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from './../../utils/http';

const ShopCart = ({ addToCart, detailPro, categoryid }) => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    const increment = () => {
        setCount(count + 1);
    };

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
        <>
            {data.map((item) => {
                if (categoryid === undefined) {
                    return (
                        <div className="card " key={item.id_product}>
                            <span className="discount">{item.discount}% Off</span>
                            <div className="product-like">
                                <label>{count}</label> <br />
                                <i class="fa-solid fa-heart" onClick={increment}></i>
                            </div>
                            <Link to="/product_detail">
                                <img
                                    src={`http://172.16.10.245/admin_dasboard/upload/product/${item.image}`}
                                    className="card-img-top"
                                    alt="..."
                                    onClick={() => detailPro(item)}
                                />
                            </Link>

                            <div className="card-body">
                                <h5 className="card-title product-name" title={item.name}>
                                    {item.name}
                                </h5>
                                <div className="rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="price">
                                        Giá tiền: {item.price.toLocaleString('us-US')} đ
                                    </p>
                                    <button
                                        className="btn-add"
                                        href="!#"
                                        onClick={() => addToCart(item)}
                                    >
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                                <p>Giảm tới: {item.price.toLocaleString('us-US')} đ</p>
                            </div>
                        </div>
                    );
                } else if (categoryid === item.category_id) {
                    console.log(categoryid);
                    return (
                        <div className="card " key={item.id_product}>
                            <span className="discount">{item.uudai}% Off</span>
                            <div className="product-like">
                                <label>{count}</label> <br />
                                <i class="fa-solid fa-heart" onClick={increment}></i>
                            </div>
                            <Link to="/product_detail">
                                <img
                                    src={`http://172.16.10.245/admin_dasboard/upload/product/${item.image}`}
                                    className="card-img-top"
                                    alt="..."
                                    onClick={() => detailPro(item)}
                                />
                            </Link>

                            <div className="card-body">
                                <h5 className="card-title product-name" title={item.name}>
                                    {item.name}
                                </h5>
                                <div className="rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="price">
                                        Giá tiền: {item.price.toLocaleString('us-US')} đ
                                    </p>
                                    <button
                                        className="btn-add"
                                        href="!#"
                                        onClick={() => addToCart(item)}
                                    >
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                                <p>Giảm tới: {item.price.toLocaleString('us-US')} đ</p>
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default ShopCart;
