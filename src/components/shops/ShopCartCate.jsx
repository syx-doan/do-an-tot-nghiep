import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosClient from '../../utils/http';

const ShopCartCate = ({ addToCart }) => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const {id} = useParams();
    const increment = () => {
        setCount(count + 1);
    };
    
    const fetchPost = async () => {
        try {
          const response = await axiosClient(`pruducts/category_id:${id}`)
          setData(response.data);
          console.log(response.data)
        } catch (err) {
          console.error(err);
        }
      };
    useEffect(() => {
        fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

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
                        <img src={`http://172.16.10.111/duan/admin_dasboard/upload/product/${item.image}`} className="card-img-top" alt="..." />  
                        <div className="card-body">
                            <h5 className="card-title product-name">{item.name}</h5>
                            <div className="rate">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <p className="price">Giá tiền: {item.price}.đ</p>

                                <button
                                    className="btn-add"
                                    href="!#"
                                    onClick={() => addToCart(item)}
                                >
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                            <p >Giảm tới: {item.price}.đ</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default ShopCartCate;

