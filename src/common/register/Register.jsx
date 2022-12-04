import React, { useState } from 'react';
import './register.scss';
import { useNavigate } from 'react-router-dom';
import { isEmpty, isEmail } from 'validator';
import axiosClient from './../../utils/http';
import { toast, ToastContainer } from 'react-toastify';
import { any } from 'prop-types';
import axiosApi from '~/utils/api_php';

function Register() {
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [confPassWord, setConfPassWord] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [validateMsg, setValidateMsg] = useState('');
    const navigate = useNavigate();

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };
    const onChangeFullName = (e) => {
        const value = e.target.value;
        setFullname(value);
    };
    const onChangeUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };
    const onChangePassWord = (e) => {
        const value = e.target.value;
        setPassword(value);
    };
    const onChangeConfPassWord = (e) => {
        setConfPassWord(e.target.value);
        // if( password !== confPassWord){
        //     setValidateMsg(validateMsg.confPassWord)
        // }
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

        if (isEmpty(password)) {
            msg.password = 'Vui lòng nhập  mật khẩu';
        }
        if (password !== confPassWord) {
            msg.confPassWord = 'Mật khẩu không giống nhau';
        }

        if (isEmpty(fullname)) {
            msg.fullname = 'Vui lòng nhập tên ';
        }

        if (isEmpty(username)) {
            msg.username = 'Vui lòng nhập tên tài khoản ';
        }
        setValidateMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        const isValidate = validateAll();

        if (!isValidate) return;
        axiosApi
            .post('login', {
                action: 'register',
                email: email,
                password: password,
                fullname: fullname,
                username: username
            })
            .then((response) => { 
                // Code error register fail == 100
                // Success == 200
                // Not fix pls
                console.log(response.data.code)
                if (response.data.code == 200) {
                    // localStorage.setItem('data-user', JSON.stringify(response.data));
                    success();
                    setTimeout(() => {
                        navigate('/');
                    }, 500);
                    e.preventDefault()
                }
            });

        setFullname('');
        setEmail('');
        setPassword('');
        setConfPassWord('');
        setUsername('');
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
                                                    Tên người dùng
                                                </label>
                                            </div>
                                            <div className="form-input col">
                                                <div className="input-content">
                                                    <input
                                                        onChange={onChangeUsername}
                                                        type="text"
                                                        placeholder="Nhập tên người dùng"
                                                        className="input-item"
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex mt-2">
                                                <div className="validateMsg">
                                                    {validateMsg.username}
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
