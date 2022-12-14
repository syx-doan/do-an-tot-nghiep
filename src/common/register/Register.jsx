import React, { useState } from 'react';
import './register.scss';
import { useNavigate } from 'react-router-dom';
import { isEmpty, isEmail } from 'validator';
import axiosClient from './../../utils/http';
import { toast, ToastContainer } from 'react-toastify';

function Register() {
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [confPassWord, setConfPassWord] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [validateMsg, setValidateMsg] = useState('');
    const navigate = useNavigate();

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };
    const onChangePhone = (e) => {
        const value = e.target.value;
        setPhone(value);
    };
    const onChangeFullName = (e) => {
        const value = e.target.value;
        setFullname(value);
    };
    const onChangePassWord = (e) => {
        const value = e.target.value;
        setPassword(value);
    };
    const onChangeConfPassWord = (e) => {
        setConfPassWord(e.target.value);
    };

    const success = () =>
        toast.success('Đăng ký tài khoản thành công', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    const validateAll = () => {
        const msg = {};
        if (isEmpty(email)) {
            msg.email = 'Vui lòng nhập  email ';
        } else if (!isEmail(email)) {
            msg.email = 'Định dạng email chưa đúng';
        }
        if (isEmpty(phone)) {
            msg.phone = 'Vui lòng nhập số điện thoại';
        }

        if (isEmpty(password)) {
            msg.password = 'Vui lòng nhập  mật khẩu';
        }
        if (isEmpty(phone)) {
            msg.phone = 'Vui lòng nhập số điện thoại';
        }
        if (password !== confPassWord) {
            msg.confPassWord = 'Mật khẩu không giống nhau';
        }

        if (isEmpty(fullname)) {
            msg.fullname = 'Vui lòng nhập tên ';
        }
        setValidateMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        const isValidate = validateAll();

        if (!isValidate) return;

        axiosClient.post('dangky', {
            // action: 'login',
            fullname,
            password,
            email,
            phone,
        });

        try {
            axiosClient.post('dangky', {
                fullname,
                password,
                email,
                phone,
            });
            success();
            setTimeout(() => {
                navigate('/dangnhap');
            }, 1000);
            // console.log('aloalo')
        } catch (error) {
            alert('error');
        }
    };
    return (
        <div>
            <div className="wrapper-register">
                <div className="container">
                    <ToastContainer />
                    <div className="row alight-item-center">
                        <div className="col-lg-7">
                            <div className="contact-register">
                                <h3 className="title">Mua ngay nhiều món hàng tại Click Me</h3>

                                <p className="sub-title">
                                    Click Me là trang web thương mại điện tử phổ biến-tiện lợi nhất
                                    hiện nay
                                </p>
                                <img
                                    src="	https://img.lovepik.com/photo/45010/2350.jpg_wh860.jpg"
                                    alt=""
                                />
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
                                                        placeholder="Nhập họ và tên"
                                                        className="input-item"
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="validateMsg">
                                                    {validateMsg.fullname}
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
                                                        placeholder="Nhập email của bạn"
                                                        className="input-item"
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="validateMsg">
                                                    {validateMsg.email}
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
                                                        placeholder="Nhập email số điện thoại"
                                                        className="input-item"
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="validateMsg">
                                                    {validateMsg.phone}
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
                                                        placeholder="Nhập mật khẩu"
                                                        className="input-item"
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="validateMsg">
                                                    {validateMsg.password}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-item">
                                        <div className="row flex-column flex-wrap">
                                            <div className="form-label col">
                                                <label htmlFor="" className="">
                                                    Nhập lại mật khẩu
                                                </label>
                                            </div>
                                            <div className="form-input col">
                                                <div className="input-content">
                                                    <input
                                                        onChange={onChangeConfPassWord}
                                                        type="password"
                                                        placeholder="Nhập lại mật khẩu"
                                                        className="input-item"
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="validateMsg">
                                                    {validateMsg.confPassWord}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            onClick={handleSubmitRegister}
                                            className="btn-register"
                                        >
                                            <span>Đăng ký</span>
                                        </button>
                                    </div>
                                    <div className="text-center mt-4 text-register">
                                        <strong>Đã có tài khoản? </strong>
                                        <a href="/dangnhap">Đăng nhập</a>
                                    </div>
                                    <div className="text-center mt-5">
                                        <div className="description-register">
                                            Bằng việc chọn đăng ký, bạn đã đồng ý với các
                                            <a href="#/">Điều khoản sử dụng</a> và{' '}
                                            <a href="#/">Chính sách bảo mật</a> của chúng tôi
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
