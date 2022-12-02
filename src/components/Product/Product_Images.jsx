import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axiosClient from '~/utils/http';

const Product_Images = ({ url, IdPro }) => {
    const [data, setData] = useState([]);

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
                        if (item.id_product === IdPro) {
                            return (
                                <div>
                                    <img src={`${url}${item.image}`} alt="" />
                                </div>
                            );
                        } else {
                            return <></>;
                        }
                    })}

                    <button className="product__content-button product__content-button-left">
                        <svg
                            enableBackground="new 0 0 13 20"
                            viewBox="0 0 13 20"
                            x={0}
                            y={0}
                            className="product__content-svg-icon icon-arrow-left-bold"
                        >
                            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                        </svg>
                    </button>
                    <button className="product__content-button product__content-button-right">
                        <svg
                            enableBackground="new 0 0 13 21"
                            viewBox="0 0 13 21"
                            x={0}
                            y={0}
                            className="product__content-svg-icon icon-arrow-right-bold"
                        >
                            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Product_Images;
