import React from 'react';
import { Modal } from 'antd';
import CartVisa from '../cartvisa/CartVisa';
import './thanhtoan.scss';

function ThanhToan({ handleCancel, handleOk, isModalOpen }) {
    return (
        <Modal
            title="Thanh toán"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            forceRender
            mask
            zIndex={99999}
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
                                        <h5>Địa chỉ thanh toán</h5>
                                        <label htmlFor="fname">
                                            <i className="fa fa-user" /> Tên khách hàng
                                        </label>
                                        <input
                                            type="text"
                                            id="fname"
                                            name="firstname"
                                            placeholder="Nhập tên..."
                                        />
                                        <label htmlFor="phone">
                                            <i className="fa fa-phone" /> Số điện thọai
                                        </label>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            placeholder="Nhập số điện thoại..."
                                        />
                                        <label htmlFor="adr">
                                            <i className="fa fa-address-card-o" />
                                            Địa chỉ chi tiết (nhà/ngõ/ngách)
                                        </label>
                                        <input
                                            type="text"
                                            id="adr"
                                            name="address"
                                            placeholder="Nhập..."
                                        />
                                        <label htmlFor="quan">
                                            <i className="fa fa-institution" />
                                            Quận/Huyện
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="Nhập..."
                                        />
                                        <label htmlFor="city">
                                            <i className="fa fa-institution" />
                                            Tỉnh/ Thành Phố
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="Nhập..."
                                        />
                                    </div>
                                    <div className="col-50">
                                        <h5>Phương thức thanh toán</h5>
                                        <label className="d-flex align-items-center">
                                            <input type="checkbox" name="nhanhang" />
                                            <span className="ms-2">
                                                Thanh toán sau khi nhận hàng
                                            </span>
                                        </label>
                                        <h5 className="d-flex justify-content-center thethanhtoan">
                                            Thanh toán bằng thẻ visa
                                        </h5>
                                        <CartVisa />
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
