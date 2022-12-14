import React, { useEffect, useState } from 'react';
import axiosClient from '~/utils/http';
import './donhang.scss';
const DonHang = () => {
    const [data, setData] = useState([]);
    const idUser = JSON.parse(localStorage.getItem('data-user'));
    const [role, setRole] = useState('s');

    const fetchBill = async () => {
        try {
            const response = await axiosClient('bill');
            setData(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        fetchBill();
    }, []);
    return (
        <>
            <div className="donhang">
                <div className="content">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Mã đơn hàng</th>
                                <th>Trạng thái</th>
                                <th>Địa chỉ</th>
                                <th>Ghi chú</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                if (item.id_user === idUser[0].id_user) {
                                    if (item.status === 0) {
                                        return setRole('Đang xử lý');
                                    } else if (item.status === 1) {
                                        return setRole('Đã giao');
                                    } else if (item.status === 2) {
                                        return setRole('Đã hủy đơn');
                                    }
                                    console.log(role);
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.id_bill}</td>
                                                <td>{role}</td>
                                                <td>{item.address}</td>
                                                <td>{item.note}</td>
                                                <td>@mdo</td>
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

export default DonHang;
