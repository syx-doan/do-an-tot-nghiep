/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import axiosClient from '~/utils/http';

const User = ({ url }) => {
    var data_User = JSON.parse(localStorage.getItem('data-user'));

    const [fullName, setFullName] = useState(data_User[0].fullname);
    const [email, setEmail] = useState(data_User[0].email);
    const [image, setImage] = useState(data_User[0].image);
    const [phone, setPhone] = useState(data_User[0].phone);
    const [password, setPassword] = useState(data_User[0].password);
    const idUser = data_User[0].id_user;

    const onChangeFullName = (e) => {
        const value = e.target.value;
        setFullName(value);
    };

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    const onChangeImage = (e) => {
        const value = e.target.value.substr(11, 200);
        setImage(value);
    };

    const onChangePhone = (e) => {
        const value = e.target.value;
        setPhone(value);
    };

    const onChangePassWord = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleUpdateUser = () => {
        try {
            axiosClient.post('capnhattaikhoan', {
                idUser,
                fullName,
                email,
                image,
                phone,
                password,
            });
        } catch (error) {
            alert('error');
        }
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = '/dangnhap';
    };
    return (
        <>
            <div>
                <div className="wrapper-register">
                    <div className="container">
                        <div className="row alight-item-center">
                            <div className="col-lg-7">
                                <div className="contact-register">
                                    <h3 className="title">Mua ngay nhiều món hàng tại Click Me</h3>

                                    <p className="sub-title">
                                        Click Me là trang web thương mại điện tử phổ biến-tiện lợi
                                        nhất hiện nay
                                    </p>
                                    {data_User.map((item) => {
                                        if (item.image) {
                                            return (
                                                <img
                                                    src={`${url}/users/${item.image}`}
                                                    alt=""
                                                    style={{ width: 500, padding: 50 }}
                                                />
                                            );
                                        } else {
                                            return (
                                                <img
                                                    src="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"
                                                    alt=""
                                                    style={{ width: 500, padding: 50 }}
                                                />
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="form-box">
                                    <h3 className="text-center mb-5 title">Đăng ký ngay</h3>
                                    <form action="" className="form-register">
                                        <div className="form-item">
                                            <div className="row flex-column flex-wrap">
                                                <div className="form-label col">
                                                    <label htmlFor="" className="">
                                                        Họ tên
                                                    </label>
                                                </div>
                                                <div className="form-input col">
                                                    <div className="input-content">
                                                        <input
                                                            onChange={onChangeFullName}
                                                            type="text"
                                                            placeholder={data_User[0].fullname}
                                                            className="input-item"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-item">
                                            <div className="row flex-column flex-wrap">
                                                <div className="form-label col">
                                                    <label htmlFor="" className="">
                                                        Nhập email
                                                    </label>
                                                </div>
                                                <div className="form-input col">
                                                    <div className="input-content">
                                                        <input
                                                            onChange={onChangeEmail}
                                                            type="email"
                                                            placeholder={data_User[0].email}
                                                            className="input-item"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-item">
                                            <div className="row flex-column flex-wrap">
                                                <div className="form-label col">
                                                    <label htmlFor="" className="">
                                                        Ảnh người dùng
                                                    </label>
                                                </div>
                                                <div className="form-input col">
                                                    <div className="input-content">
                                                        <input
                                                            onChange={onChangeImage}
                                                            type="file"
                                                            placeholder={data_User[0].image}
                                                            className="input-item"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-item">
                                            <div className="row flex-column flex-wrap">
                                                <div className="form-label col">
                                                    <label htmlFor="" className="">
                                                        Số điện thoại
                                                    </label>
                                                </div>
                                                <div className="form-input col">
                                                    <div className="input-content">
                                                        <input
                                                            onChange={onChangePhone}
                                                            type="number"
                                                            placeholder={data_User[0].phone}
                                                            className="input-item"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-item">
                                            <div className="row flex-column flex-wrap">
                                                <div className="form-label col">
                                                    <label htmlFor="" className="">
                                                        Mật khẩu
                                                    </label>
                                                </div>
                                                <div className="form-input col">
                                                    <div className="input-content">
                                                        <input
                                                            onChange={onChangePassWord}
                                                            type="password"
                                                            placeholder={data_User[0].password}
                                                            className="input-item"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                onClick={handleUpdateUser}
                                                className="btn-register"
                                            >
                                                <span>Cập nhật thông tin tài khoản</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
