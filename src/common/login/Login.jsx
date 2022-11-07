import React, { useState } from 'react';
import './login.scss';

import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'validator';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validateMsg, setValidateMsg] = useState('');
    const navigate = useNavigate();

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };
    const onChangePassWord = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const validateAll = () => {
        const msg = {};
        if (isEmpty(email)) {
            msg.email = 'Vui lòng nhập email đăng nhập';
        }
        if (isEmpty(password)) {
            msg.password = 'Vui lòng nhập số mật khẩu';
        }
        setValidateMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        const isValidate = validateAll();
        if (!isValidate) return;



        navigate('/');
        // Axios.post('http://localhost:4000/api/login', {
        //     email,
        //     password,
        // }).then((response) => {
        //     if (response.data.message) {
        //         alert(response.data.message);
        //     } else {
        //         alert('Xin chào : ' + response.data[0].fullname);
        //         navigate('/');
        //     }
        // });
    };
    return (
        <div>
            <div className="wrapper-register">
                <div className="container">
                    <div className="row alight-item-center">
                        <div className="col-lg-7">
                            <div className="contact-register">
                                <h3 className="title">Mua ngay nhiều món hàng tại Click Me</h3>

                                <p className="sub-title">
                                    Click Me là trang web thương mại điện tử phổ biến-tiện lợi nhất
                                    hiện nay
                                </p>
                                <img
                                    src="https://img.lovepik.com/photo/45009/7683.jpg_wh300.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="form-box">
                                <h3 className="text-center mb-5 title">Đăng nhập</h3>
                                <form action="" className="form-register">
                                    <div className="form-item">
                                        <div className="row flex-column flex-wrap">
                                            <div className="form-label col">
                                                <label htmlFor="" className="">
                                                    Email Đăng Nhập
                                                </label>
                                            </div>
                                            <div className="form-input col">
                                                <div className="input-content">
                                                    <input
                                                    onChange={onChangeEmail}
                                                        type="text"
                                                        placeholder="Nhập email "
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
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="radio">
                                            <label htmlFor="" className="radio-wrapper checkbox">
                                                <input type="checkbox"  />
                                                <span className="checkbox-name">Nhớ mật khẩu</span>
                                            </label>
                                        </div>
                                        <a href="#/">Quên mật khẩu?</a>
                                    </div>

                                    <div className="mt-4">
                                        <button onClick={handleSubmitLogin} className="btn-register">Đăng Nhập</button>
                                    </div>

                                    <div className="text-center mt-4 text-register">
                                        <a href="/dangki">Bạn chưa có tài khoản? </a>
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

export default Login;