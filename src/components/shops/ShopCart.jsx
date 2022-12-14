/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from './../../utils/http';

const ShopCart = ({ addToCart, detailPro, categoryid, url }) => {
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
                            <span className="discount">{item.sale}% Off</span>
                            <div className="product-like">
                                <label>{count}</label> <br />
                                <i class="fa-solid fa-heart" onClick={increment}></i>
                            </div>
                            <Link to='/product_detail'>
                                <img
                                    src={`${url}/product/${item.image}`}
                                    className="card-img-top"
                                    alt="..."
                                    onClick={() => detailPro(item.id_product, item.category_id)}
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
                                <p>
                                    Giảm tới:{' '}
                                    {((item.price * item.sale) / 100).toLocaleString('us-US')} đ
                                </p>
                            </div>
                        </div>
                    );
                } else if (categoryid === item.category_id) {
                    return (
                        <div className="card " key={item.id_product}>
                            <span className="discount">{item.sale}% Off</span>
                            <div className="product-like">
                                <label>{count}</label> <br />
                                <i class="fa-solid fa-heart" onClick={increment}></i>
                            </div>
                            <Link to="/product_detail">
                                <img
                                    src={`${url}${item.image}`}
                                    className="card-img-top"
                                    alt="..."
                                    onClick={() => detailPro(item.id_product, item.category_id)}
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
                                {/* <p className='giacu'>Giảm tới: {item.price.toLocaleString('us-US')} đ</p> */}
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
                                <div className='hehe'>
                                    Giảm tới:{' '}
                                    {((item.price * item.sale) / 100).toLocaleString('us-US')} đ
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default ShopCart;
