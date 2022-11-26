import React, { useState } from 'react';
import './quenmatkhau.module.scss';
import { isEmpty, isEmail } from 'validator';

function QuenMatKhau() {
    const [email, setEmail] = useState('');
    const [validateMsg, setValidateMsg] = useState('');

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    };

    const validateAll = () => {
        const msg = {};
        if (isEmpty(email)) {
            msg.email = 'Vui lòng nhập  email ';
        } else if (!isEmail(email)) {
            msg.email = 'Định dạng email chưa đúng';
        }
        setValidateMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };
    const handleForgetPassWord = (e) => {
        e.preventDefault();
        const isValidate = validateAll();
        if (!isValidate) return;
        
        console.log(e);
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
                                                    Nhập email đăng ki tài khoản
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
                                            <div className="d-flex mt-2">
                                                <div className="validateMsg"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            onClick={handleForgetPassWord}
                                            className="btn-register"
                                        >
                                            Lấy mật khẩu
                                        </button>
                                    </div>

                                    <div className="text-right mt-4 text-register">
                                        <a href="/dangnhap">Đăng nhập </a>
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

export default QuenMatKhau;
