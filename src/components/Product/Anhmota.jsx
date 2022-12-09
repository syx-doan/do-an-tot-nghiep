import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axiosClient from '~/utils/http';

const Anhmota = ({ url }) => {
    const [data, setData] = useState([]);
    const dataUser = JSON.parse(sessionStorage.getItem('data-idproduct'));

    const product_id = dataUser;

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
    }, [data]);
    return (
        <>
            <div className="product__content-scroll">
                <div className="product__content-img--list">
                    {data.map((item) => {
                        if (item.id_product === product_id) {
                            return (
                                <div style={{ padding: 5 }}>
                                    <img src={`${url}${item.image}`} alt="" />
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
