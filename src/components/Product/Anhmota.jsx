/* eslint-disable array-callback-return */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axiosClient from '~/utils/http';

const Anhmota = ({ url }) => {
    const [data, setData] = useState([]);
    const product_id = JSON.parse(sessionStorage.getItem('data-idproduct'));

    const fetchPost = async () => {
        try {
            const response = await axiosClient('product_image');
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
            <div className="product__content-scroll">
                <div className="product__content-img--list">
                    {data.map((item) => {
                        if (item.id_product === product_id) {
                            return (
                                <div style={{ padding: 5 }}>
                                    <img src={`${url}/product/${item.image}`} alt="" />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
};

export default Anhmota;
