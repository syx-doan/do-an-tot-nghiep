import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axiosClient from '~/utils/http';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ url, detailPro }) => {
    const [data, setData] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await axiosClient('newproducts');
            setData(response.data);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <>
            <div className="content grid3 product">
                {data.map((val, index) => {
                    return (
                        <div className="box" key={index}>
                            <div className="img">
                                <Link to="/product_detail">
                                    <img className='imagespnew'
                                        src={`${url}/${val.image}`}
                                        alt=""
                                        onClick={() => detailPro(val.id_product, val.category_id)}
                                    />
                                </Link>
                            </div>
                            <h5 className="d-flex justify-content-center mt-2">{val.name}</h5>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cart;
