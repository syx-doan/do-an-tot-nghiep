import React, { useEffect, useState } from 'react';
import axiosClient from './../../utils/http';

const ShopCart = ({ shopItems, addToCart }) => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const increment = () => {
        setCount(count + 1);
    };

    const fetchPost = async () => {
      try {
        const response = await axiosClient('products');
        setData(response.data);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    };
    useEffect(() => {
      fetchPost()
    }, []);

    return (
        <>
            {data.map((item, index) => {
                return (
                    <div className="box" key={item.id_product}>
                        <div className="product mtop">
                            <div className="img">
                                <span className="discount">{shopItems.discount}% Off</span>
                                <img src={item.image} alt="" />
                                <div className="product-like">
                                    <label>{count}</label> <br />
                                    <i className="fa-regular fa-heart" onClick={increment}></i>
                                </div>
                            </div>
                            <div className="product-details">
                                <h3>{item.name}</h3>
                                <div className="rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="price">
                                    <h4>${item.price}.đ </h4>
                                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                                    <button onClick={() => addToCart(shopItems)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ShopCart;
