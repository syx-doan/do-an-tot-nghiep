/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from '~/utils/http';
import './donhang.scss';
import ModalHuyDon from './ModalHuyDon';
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
        if (data.status === '0') {
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
        const newStatus = '2';

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
            <div className="donhang">
                <div className="content">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="table1">Mã ĐH</th>
                                <th className="table2">Date</th>
                                <th className="table3">Trạng thái</th>
                                <th className="table4">Địa chỉ</th>
                                <th className="table5">Ghi chú</th>
                                <th className="table6">Tổng tiền</th>
                                <th className="table7">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                if (item.id_user === idUser[0].id_user) {
                                    var role = '';
                                    if (item.status === '0') {
                                        role = 'Đang xử lý';
                                    } else if (item.status === '1') {
                                        role = 'Đã giao';
                                    } else if (item.status === '2') {
                                        role = 'Đã hủy đơn';
                                    }
                                    var sum = 0;
                                    return (
                                        <>
                                            <tr>
                                                <td className="table1">{item.id_bill}</td>
                                                <td className="table2">{item.ngaydathang}</td>
                                                <td className="table3">{role}</td>
                                                <td className="table4">{item.address}</td>
                                                <td className="table5">{item.note}</td>
                                                <td className="table6">
                                                    {billDetail.map((value) => {
                                                        if (item.id_bill === value.id_bill) {
                                                            sum += value.price * value.total;
                                                        }
                                                    })}
                                                    {sum.toLocaleString('us-US')} vnđ
                                                </td>
                                                <td className="table7">
                                                    <Link to="/donhangchitiet">
                                                        <button
                                                            className="button"
                                                            onClick={() =>
                                                                handleIdBill(item.id_bill)
                                                            }
                                                        >
                                                            <i class="fa fa-duotone fa-eye"></i>
                                                            Xem
                                                        </button>
                                                    </Link>
                                                    -
                                                    <button
                                                        className="button"
                                                        onClick={() => showModalLogin(item)}
                                                    >
                                                        <i class="fa fa-sharp fa-solid fa-trash"></i>
                                                        Hủy
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
        </>
    );
};

export default DonHang;
