/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    // var [name, setName] = useState(15);
    // var [description, setDescription] = useState(100);
 
    // };
    // var moreDescription = () => {
    //     if (description === 100) {
    //         setDescription(2000);
    //     } else {
    //         setDescription(100);
    //     }
    // };

    useEffect(() => {
        fetchProducts();
        fetchBillDetail();
    }, []);
    return (
        <>
            <div className='donhanglink'>
                <Link to={"/donhang"}>
                <i class="fa-solid fa-backward iconback"></i>
                 <span>Đơn hàng</span></Link>
            </div>
            <div className="donhangchitiet">
                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className=" mb-4 text-center">Đơn hàng chi tiết </h3>
                                <div className="table-wrap">
                                    <table className="table">
                                        <thead className="thead-primary">
                                            <tr>
                                                <th>Tên sản phẩm</th>
                                                <th className="img">&nbsp;</th>
                                                <th>Giá</th>
                                                <th>Mô tả</th>
                                                <th>số lượng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item) => {
                                                if (item.id_bill === idBill) {
                                                    return (
                                                        <>
                                                            <tr>
                                                                {product.map((value) => {
                                                                    if (
                                                                        item.id_product === value.id_product
                                                                    ) {
                                                                        return (
                                                                            <>
                                                                                <td>
                                                                                    {value.name}
                                                                                </td>
                                                                                <td>
                                                                                    <img
                                                                                        src={`${url}/product/${value.image}`}
                                                                                        alt=""
                                                                                    />
                                                                                </td>
                                                                                <td>
                                                                                    {value.price.toLocaleString(
                                                                                        'us-US',
                                                                                    )}{' '}
                                                                                    vnđ
                                                                                </td>
                                                                                <td
                                                                                    // onClick={() =>
                                                                                    //     moreDescription()
                                                                                    // }
                                                                                >
                                                                                    {value.description}
                                                                                </td>
                                                                            </>
                                                                        );
                                                                    }
                                                                })}

                                                                <td>
                                                                    {item.total}
                                                                </td>
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
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ChiTietDonHang;
