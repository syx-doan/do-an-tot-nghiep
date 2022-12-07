import React from 'react';
import { Modal } from 'antd';
import './thanhtoan.scss';
// import CartVisa from './../cartvisa/CartVisa';
import { useState, useEffect } from 'react';
import axiosClient from './../../utils/http';
import { isEmpty } from 'validator';
import { toast, ToastContainer } from 'react-toastify';
// import Spinner from './../spiner/Spiner';

function ThanhToan({ handleCancel, isModalOpen, handleOk }) {
    const [dataUser, setData] = useState(JSON.parse(localStorage.getItem('data-user')));
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [validateMsg, setValidateMsg] = useState('');
    // const [isLoading, setIsLoading] = useState(false);

    const errorThanhToan = () =>
        toast.error('Vui lòng nhập đầy đủ thông tin', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    const validateAll = () => {
        const msg = {};
        if (isEmpty(name)) {
            msg.name = 'Vui lòng nhập  tên  ';
        }
        if (isEmpty(phone)) {
            msg.phone = 'Vui lòng nhập  số điện thoại';
        }

        if (isEmpty(address)) {
            msg.address = 'Vui lòng nhập địa chỉ ';
        }
        if (isEmpty(district)) {
            msg.district = 'Vui lòng nhập quận/huyện ';
        }
        if (isEmpty(city)) {
            msg.city = 'Vui lòng nhập tỉnh/thành phố ';
        }
        setValidateMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };
    const handleThanhToan = () => {
        const isValidate = validateAll();
        if (!isValidate) return;

        const data = { name, phone, address, district, city };
        try {
            axiosClient.post('thanhtoan', { data });
            // setIsLoading(true);
            setTimeout(() => {
                // setIsLoading(false);
                handleOk();
            }, 1000);
        } catch (error) {
            errorThanhToan();
        }
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
                <ToastContainer />

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
                                        <h5 className="d-flex justify-content-center font-weight-bold thanhtoan">
                                            Thông tin khách hàng
                                        </h5>
                                        <label htmlFor="quan">
                                            <i className="fa fa-institution" />
                                            Số điện thoạithoại
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setPhone(e.target.value);
                                            }}
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            placeholder="Nhập..."
                                        />
                                        <div className="d-flex mt-n1">
                                            <div className="validateMsg">{validateMsg.phone}</div>
                                        </div>
                                        <label htmlFor="adr">
                                            <i className="fa fa-address-card-o" />
                                            Địa chỉ chi tiết (nhà/ngõ/ngách)
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
                                        <label htmlFor="quan">
                                            <i className="fa fa-institution" />
                                            Quận/Huyện
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setDistrict(e.target.value);
                                            }}
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="Nhập..."
                                        />
                                        <div className="d-flex mt-n1">
                                            <div className="validateMsg">
                                                {validateMsg.district}
                                            </div>
                                        </div>
                                        <label htmlFor="city">
                                            <i className="fa fa-institution" />
                                            Tỉnh/ Thành Phố
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setCity(e.target.value);
                                            }}
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="Nhập..."
                                        />
                                        <div className="d-flex mt-n1">
                                            <div className="validateMsg">{validateMsg.city}</div>
                                        </div>
                                    </div>
                                </div>
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked="checked"
                                        name="sameadr"
                                    />
                                    Địa chỉ thanh toán mặc định
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
