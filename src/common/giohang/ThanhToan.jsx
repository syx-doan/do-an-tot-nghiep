import React from 'react';
import { Modal } from 'antd';


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
                    <div className="col-75">
                        <div className="container">
                            <form action="/action_page.php">
                                <div className="row">
                                    <div className="col-50">
                                        <h5>Địa chỉ thanh toán</h5>
                                        <label htmlFor="fname">
                                            <i className="fa fa-user" /> Họ và tên
                                        </label>
                                        <input
                                            type="text"
                                            id="fname"
                                            name="firstname"
                                            placeholder=""
                                        />
                                        <label htmlFor="phone">
                                            <i className="fa fa-phone" /> Số điện thọai
                                        </label>
                                        <input type="text" id="phone" name="phone" placeholder="" />
                                        <label htmlFor="adr">
                                            <i className="fa fa-address-card-o" />
                                            Địa chỉ
                                        </label>
                                        <input type="text" id="adr" name="address" placeholder="" />
                                        <label htmlFor="city">
                                            <i className="fa fa-institution" />
                                            Thành phố
                                        </label>
                                        <input type="text" id="city" name="city" placeholder="" />
                                    </div>
                                    <div className="col-50">
                                        <h5>Thanh toán</h5>
                                        <label htmlFor="fname">Thẻ được chấp nhận</label>
                                        <div className="icon-container">
                                            <i
                                                className="fa fa-cc-visa"
                                                style={{ color: 'navy' }}
                                            />
                                            <i
                                                className="fa fa-cc-amex"
                                                style={{ color: 'blue' }}
                                            />
                                            <i
                                                className="fa fa-cc-mastercard"
                                                style={{ color: 'red' }}
                                            />
                                            <i
                                                className="fa fa-cc-discover"
                                                style={{ color: 'orange' }}
                                            />
                                        </div>
                                        <label htmlFor="cname">Tên trên thẻ</label>
                                        <input
                                            type="text"
                                            id="cname"
                                            name="cardname"
                                            placeholder="John More Doe"
                                        />
                                        <label htmlFor="ccnum">Số thẻ tín dụng</label>
                                        <input
                                            type="text"
                                            id="ccnum"
                                            name="cardnumber"
                                            placeholder="1111-2222-3333-4444"
                                        />
                                        <label>
                                            <input type="checkbox" name="nhang" />
                                            Thanh toán sau khi nhận hàng
                                        </label>
                                    </div>
                                </div>
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked="checked"
                                        name="sameadr"
                                    />
                                    Địa chỉ nhận hàng giống như thanh toán
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
