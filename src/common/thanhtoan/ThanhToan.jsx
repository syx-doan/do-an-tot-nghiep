import React from 'react';
import { Modal } from 'antd';
import './thanhtoan.scss';
// import CartVisa from './../cartvisa/CartVisa';
import { useState, useEffect } from 'react';
import { isEmpty } from 'validator';

function ThanhToan({ clear, handleCancel, isModalOpen, handleOk }) {
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
        // eslint-disable-next-line no-unused-vars
        const { id_user, fullname, phone } = [];
    }
    function formatDate(date) {
        if (!date) return;
        // const hours = `0${date.getHours()}`.slice(-2);
        // const minutes = `0${date.getMinutes()}`.slice(-2);
        // const seconds = `0${date.getSeconds()}`.slice(-2);
        const ngay = `0${date.getDate()}`.slice(-2);
        const thang = `0${date.getMonth()}`.slice(-2);
        const nam = `${date.getFullYear()}`;
        return `${nam}/${thang}/${ngay}`;
    }

    const now = new Date();
    const newTimeString = formatDate(now);

    const handleThanhToan = () => {
        const isValidate = validateAll();
        if (!isValidate) return;

        const data = { id_user, address, fullname, note, newTimeString };
        handleOk(data);
        setAddress('');
        setNote('');
        // sessionStorage.clear();
        clear();
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
                                            placeholder=""
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
                                            placeholder=""
                                        />
                                        <label htmlFor="adr">
                                            <i class="fa-solid fa-location-dot mr-2"></i>
                                            Địa chỉ giao hàng
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
