import React, { useEffect, useState } from 'react';
import axiosClient from '~/utils/http';

const Catg = ({ CategoryProduct }) => {
    const [data, setData] = useState([]);

    const fetchPost = async () => {
        try {
            const response = await axiosClient('category');
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
            <div className="category">
                <div className="chead d_flex">
                    <h1>Brands </h1>
                    <h1>Categoty </h1>
                </div>
                {data.map((value, index) => (
                    <div
                        onClick={() => CategoryProduct(value.id_category)}
                        className="box f_flex"
                        key={index}
                    >
                        <span>{value.name_category}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Catg;
