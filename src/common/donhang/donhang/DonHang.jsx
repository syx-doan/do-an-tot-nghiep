/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import axiosClient from '~/utils/http';
import styles from './donhang.module.scss';
import ModalHuyDon from '../ModalHuyDon';

const cx = classNames.bind(styles);
const DonHang = ({ handleIdBill }) => {
    const [data, setData] = useState([]);
    const [billDetail, setBillDetail] = useState([]);
    const idUser = JSON.parse(localStorage.getItem('data-user'));

    const fetchBill = async () => {
        try {
            const response = await axiosClient('bill');
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const fetchBillDetail = async () => {
        try {
            const response = await axiosClient('bill_dentail');
            setBillDetail(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
    const showModalLogin = (data) => {
        if (data.status === 0) {
            setIsModalOpenLogin(true);
            sessionStorage.setItem('huy-don', JSON.stringify(data));
        }
    };

    const handleCancelLogin = () => {
        setIsModalOpenLogin(false);
    };

    const huyDon = JSON.parse(sessionStorage.getItem('huy-don'));

    const handleOkLogin = () => {
        const idBill = huyDon.id_bill;
        const newStatus = 2;

        try {
            axiosClient.post('huydon', {
                idBill,
                newStatus,
            });

            handleCancelLogin();
        } catch (error) {}
    };

    useEffect(() => {
        fetchBill();
        fetchBillDetail();
    }, [data]);
    return (
        <>
            <div className={cx("donhang")}>
                <section className={cx("ftco-section")}>
                    <div className={cx("container")}>
                        <div className={cx("row")}>
                            <div className={cx("col-md-12")}>
                                <h3 className={cx("h5 mb-4 text-center")}>Đơn hàng</h3>
                                <div className={cx("table-wrap")}>
                                    <table className={cx("table")}>
                                        <thead className={cx("thead-primary")}>
                                            <tr>
                                                <th>#</th>
                                                <th>Ngày đặt hàng</th>
                                                <th>Trạng thái </th>
                                                <th>Địa chỉ</th>
                                                <th>Ghi chú</th>
                                                <th>Tổng tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item) => {
                                                if (item.id_user === idUser[0].id_user) {
                                                    var role = '';
                                                    if (item.status === 0) {
                                                        role = 'Đang xử lý';
                                                    } else if (item.status === 1) {
                                                        role = 'Đã giao';
                                                    } else if (item.status === 2) {
                                                        role = 'Đã hủy đơn';
                                                    }
                                                    var sum = 0;
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>{item.id_bill}</td>
                                                                <td>{item.ngaydathang}</td>
                                                                <td
                                                                    className={`table${item.status}`}
                                                                >
                                                                    {role}
                                                                </td>
                                                                <td>{item.address}</td>
                                                                <td>{item.note}</td>
                                                                <td>
                                                                    {billDetail.map((value) => {
                                                                        if (
                                                                            item.id_bill ===
                                                                            value.id_bill
                                                                        ) {
                                                                            sum +=
                                                                                value.price *
                                                                                value.total;
                                                                        }
                                                                    })}
                                                                    {sum.toLocaleString('us-US')}{' '}
                                                                    vnđ
                                                                </td>
                                                                <td className={cx("action")}>
                                                                    <Link to="/donhangchitiet">
                                                                        <button
                                                                            type="button"
                                                                            className={cx("eyes")}
                                                                            data-dismiss="alert"
                                                                            aria-label="Eyes"
                                                                            onClick={() =>
                                                                                handleIdBill(
                                                                                    item.id_bill,
                                                                                )
                                                                            }
                                                                        >
                                                                            <i class="fa fa-eye"></i>
                                                                            Xem
                                                                        </button>
                                                                    </Link>
                                                                    <button
                                                                        type="button"
                                                                        className={cx("close")}
                                                                        data-dismiss="alert"
                                                                        aria-label="Close"
                                                                        onClick={() =>
                                                                            showModalLogin(item)
                                                                        }
                                                                    >
                                                                        <i class="fa fa-close"></i>
                                                                        Huỷ
                                                                    </button>
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
                                    <ModalHuyDon
                                        isModalOpenLogin={isModalOpenLogin}
                                        handleOkLogin={handleOkLogin}
                                        handleCancelLogin={handleCancelLogin}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default DonHang;
