/* eslint-disable no-redeclare */

import React from 'react';
import { Modal } from 'antd';
import './thanhtoan.scss';
// import CartVisa from './../cartvisa/CartVisa';
import { useState, useEffect } from 'react';
import { isEmpty } from 'validator';

function ThanhToan({ handleCancel, isModalOpen, handleOk }) {
    const [dataUser, setData] = useState(JSON.parse(localStorage.getItem('data-user')));
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [validateMsg, setValidateMsg] = useState('');

    const validateAll = () => {
        const msg = {};

        if (isEmpty(address)) {
            msg.address = 'Vui lòng nhập địa chỉ ';
        }

        setValidateMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };
    if (dataUser) {
        var { id_user, fullname, phone } = dataUser[0];
    } else {
        const { id_user, fullname, phone } = [];
    }

    const handleThanhToan = () => {
        const isValidate = validateAll();
        if (!isValidate) return;

        const data = { id_user, address, fullname, note };
        handleOk(data);
        setAddress('');
        setNote('');
    };
    useEffect(() => {
        const dataUser = JSON.parse(localStorage.getItem('data-user'));
        if (dataUser && dataUser !== 'null') {
            setData(dataUser);
        } else {
            setData(false);
        }
    }, []);

    return (
        <Modal
            title="Thanh toán"
            open={isModalOpen}
            onOk={handleThanhToan}
            onCancel={handleCancel}
            forceRender
            mask
            zIndex={99}
            width="80%"
        >
            <div className="thanhtoan">
                <div className="row">
                    <div class="checkout-wrap">
                        <ul class="checkout-bar">
                            <li class="visited first">
                                <a href="!#">Đăng nhập</a>
                            </li>

                            <li class="previous visited">Thêm vào giỏ hàng</li>

                            <li class="active">Thanh toán</li>

                            <li class="next">Thanh toán thành công</li>

                            <li class="">Hoàn thành</li>
                        </ul>
                    </div>
                    <div className="col-75">
                        <div className="container">
                            <form action="/action_page.php">
                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="adr">
                                            <i className="fa fa-address-card-o mr-2" />
                                            Tên nhận hàng
                                        </label>
                                        <input
                                            value={fullname}
                                            type="text"
                                            id="adr"
                                            name="address"
                                            placeholder="Nhập..."
                                        />
                                        <label htmlFor="adr">
                                            <i className="fa-solid fa-phone-volume mr-2" />
                                            Số điện thoại
                                        </label>
                                        <input
                                            value={phone}
                                            type="text"
                                            id="adr"
                                            name="address"
                                            placeholder="Nhập..."
                                        />
                                        <label htmlFor="adr">
                                            <i class="fa-solid fa-location-dot mr-2"></i>
                                            Địa chỉ chi tiết
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setAddress(e.target.value);
                                            }}
                                            type="text"
                                            id="adr"
                                            name="address"
                                            placeholder="Nhập..."
                                        />
                                        <div className="d-flex mt-n1">
                                            <div className="validateMsg">{validateMsg.address}</div>
                                        </div>
                                        <label htmlFor="adr">
                                            <i class="fa-solid fa-pen mr-2"></i>
                                            Ghi chú
                                        </label>
                                        <textarea
                                            onChange={(e) => {
                                                setNote(e.target.value);
                                            }}
                                            style={{ width: '100%' }}
                                            type="text"
                                            id="adr"
                                            name="address"
                                            placeholder="Nhập..."
                                        />
                                    </div>

                                    {/* <div className="col-50">
                                        <h5 className="d-flex justify-content-center font-weight-bold thanhtoan">
                                            Phương thức thanh toán
                                        </h5>
                                      
                                        <p>Hoặc : </p>
                                        <h5 className="d-flex justify-content-center thethanhtoan">
                                            Thanh toán bằng thẻ visa
                                        </h5>
                                        <CartVisa />
                                    </div> */}
                                </div>
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked="checked"
                                        name="sameadr"
                                    />
                                    Thanh toán khi nhận hàng
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ThanhToan;
