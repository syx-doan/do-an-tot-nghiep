import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from './../../utils/http';

const ShopCart = ({ addToCart, detailPro, categoryid }) => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    // const [ddata, setDdata] = useState([]);

    const increment = () => {
        setCount(count + 1);
    };

    // console.log(categoryid);

    const fetchPost = async () => {
        try {
            const response = await axiosClient('products');
            setData(response.data);
            // console.log(response);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        fetchPost();
    }, []);

    if (categoryid === undefined) {
        return (
            <>
                {data.map((item) => {
                    return (
                        <div className="card " key={item.id_product}>
                            <span className="discount">{item.discount}% Off</span>
                            <div className="product-like">
                                <label>{count}</label> <br />
                                <i class="fa-solid fa-heart" onClick={increment}></i>
                            </div>
                            <Link to="/product_detail">
                                <img
                                    src={`http://172.16.10.239/admin_dasboard/upload/product/${item.image}`}
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
                                <p className='giacu'>Giảm tới: {item.price.toLocaleString('us-US')} đ</p>
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
                               
                            </div>
                        </div>
                    );
                })}
            </>
        );
    }
};

export default ShopCart;
