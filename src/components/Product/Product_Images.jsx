import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axiosClient from '~/utils/http';

const Product_Images = ({ url }) => {
    const [data, setData] = useState([]);
    const IdPro = JSON.parse(sessionStorage.getItem('data-idproduct'));

    const fetchProduct_Image = async () => {
        try {
            const response = await axiosClient('product_image');
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        fetchProduct_Image();
    }, [data]);
    return (
        <>
            <div className="product__content-scroll">
                <div className="product__content-img--list">
                    {data.map((item) => {
                        if (item.id_product === IdPro) {
                            return (
                                <div style={{ padding: 5 }}>
                                    <img src={`${url}${item.image}`} alt="" />
                                </div>
                            );
                        } else {
                            return '';
                        }
                    })}
                </div>
            </div>
        </>
    );
};

export default Product_Images;
