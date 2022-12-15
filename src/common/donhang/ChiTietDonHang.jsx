/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import axiosClient from '~/utils/http';
import './donhangchitiet.scss';
const ChiTietDonHang = ({ url }) => {
    const [data, setData] = useState([]);
    const [product, setProduct] = useState([]);
    const idBill = JSON.parse(sessionStorage.getItem('id-bill'));

    const fetchBillDetail = async () => {
        try {
            const response = await axiosClient('bill_dentail');
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axiosClient('products');
            setProduct(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    var [name, setName] = useState(15);
    var [description, setDescription] = useState(100);
    var moreName = () => {
        if (name === 15) {
            setName(2000);
        } else {
            setName(15);
        }
    };
    var moreDescription = () => {
        if (description === 100) {
            setDescription(2000);
        } else {
            setDescription(100);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchBillDetail();
    }, []);
    return (
        <>
            <div className="donhang-ct">
                <div className="content-ct">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="table1">Tên sản phẩm</th>
                                <th className="table2">Ảnh</th>
                                <th className="table3">Price</th>
                                <th className="table4">Mô tả</th>
                                <th className="table5">Số lượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                if (item.id_bill === idBill) {
                                    return (
                                        <>
                                            <tr>
                                                {product.map((value) => {
                                                    if (item.id_product === value.id_product) {
                                                        return (
                                                            <>
                                                                <td
                                                                    className="table1"
                                                                    onClick={() => moreName()}
                                                                >
                                                                    {value.name.substr(0, name)}
                                                                </td>
                                                                <td className="table2">
                                                                    <img
                                                                        src={`${url}/product/${value.image}`}
                                                                        alt=""
                                                                    />
                                                                </td>
                                                                <td className="table3">
                                                                    {value.price.toLocaleString(
                                                                        'us-US',
                                                                    )}{' '}
                                                                    vnđ
                                                                </td>
                                                                <td
                                                                    className="table4"
                                                                    onClick={() =>
                                                                        moreDescription()
                                                                    }
                                                                >
                                                                    {value.description.substr(
                                                                        0,
                                                                        description,
                                                                    )}
                                                                </td>
                                                            </>
                                                        );
                                                    }
                                                })}

                                                <td className="table5">{item.total}</td>
                                            </tr>
                                        </>
                                    );
                                } else {
                                    return <></>;
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ChiTietDonHang;
