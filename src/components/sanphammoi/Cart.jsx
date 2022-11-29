import React, { useEffect, useState } from 'react';
import axiosClient from '~/utils/http';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './sanphammoi.module.scss';

const Cart = () => {
    const [data, setData] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await axiosClient('newproducts');
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
            <div className="content grid3 product">
                {data.map((val, index) => {
                    return (
                        <div className="box" key={index}>
                            <div className="img">
                                <img
                                    src={`http://172.16.10.245/admin_dasboard/upload/product/${val.image}`}
                                    alt=""
                                />
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
