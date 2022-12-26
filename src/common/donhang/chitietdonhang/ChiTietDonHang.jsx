/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '~/utils/http';
import styles from './donhangchitiet.module.scss';

const cx = classNames.bind(styles);
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

    useEffect(() => {
        fetchProducts();
        fetchBillDetail();
    }, []);
    return (
        <>
            <div className={cx('donhanglink')}>
                <Link to={"/donhang"}>
                <i className="fa-solid fa-backward iconback"></i>
                 <span>Đơn hàng</span></Link>
            </div>
            <div className={cx("donhangchitiet")}>
                <section className={cx("ftco-section")}>
                    <div className={cx("container")}>
                        <div className={cx("row")}>
                            <div className={cx("col-md-12")}>
                                <h3 className={cx(" mb-4 text-center")}>Đơn hàng chi tiết </h3>
                                <div className={cx("table-wrap")}>
                                    <table className={cx("table")}>
                                        <thead className={cx("thead-primary")}>
                                            <tr>
                                                <th>Tên sản phẩm</th>
                                                <th className={cx("img")}>&nbsp;</th>
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
