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
        axiosClient
            .post('login', {
                email: email,
                password: password,
            })
            .then((response) => {
                localStorage.setItem('data-user', JSON.stringify(response.data));
            });
        window.location.reload();
    };
    return (
        <>
            <div>
                <div className="wrapper-register">
                    <div className="container">
                        <div className="row alight-item-center">
                            <div className="col-lg-7">
                                <div className="contact-register">
                                    <h3 className="title">Mua ngay nhi???u m??n h??ng t???i Click Me</h3>

                                    <p className="sub-title">
                                        Click Me l?? trang web th????ng m???i ??i???n t??? ph??? bi???n-ti???n l???i
                                        nh???t hi???n nay
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
                                    <h3 className="text-center mb-5 title">????ng k?? ngay</h3>
                                    <form action="" className="form-register">
                                        <div className="form-item">
                                            <div className="row flex-column flex-wrap">
                                                <div className="form-label col">
                                                    <label htmlFor="" className="">
                                                        H??? t??n
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
                                                        Nh???p email
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
                                                        ???nh ng?????i d??ng
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
                                                        S??? ??i???n tho???i
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
                                                        M???t kh???u
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
                                                <span>C???p nh???t th??ng tin t??i kho???n</span>
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
