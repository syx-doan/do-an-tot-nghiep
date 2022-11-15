import { Modal } from 'antd';
import React, { useState } from 'react';
import './giohang.css';

const Cart = ({ CartItem, addToCart, decreaseQty, deleteQty }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Stpe: 7   calucate total of items
    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0);

    // prodcut qty total
    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    return (
        <section className="cart-items">
            <div className="container d_flex">
                {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

                <div className="cart-details">
                    {CartItem.length === 0 && (
                        <h1 className="no-items product">Không có sản phẩm được chọn</h1>
                    )}

                    {/* yasma hami le cart item lai display garaaxa */}
                    {CartItem.map((item) => {
                        const productQty = item.price * item.qty;

                        return (
                            <div className="cart-list product d_flex" key={item.id}>
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>
                                <div className="cart-details">
                                    <h3>{item.name}</h3>
                                    <h4>
                                        {item.price}.đ * {item.qty}
                                        <span>{productQty}.đ</span>
                                    </h4>
                                </div>
                                <div className="cart-items-function">
                                    <div className="removeCart">
                                        <button className="removeCart cart-icon">
                                            <i
                                                className="fa fa-solid fa-plus"
                                                onClick={() => addToCart(item)}
                                            ></i>
                                        </button>
                                        <button className="removeCart cart-icon">
                                            <i
                                                className="fa fa-solid fa-minus"
                                                onClick={() => decreaseQty(item)}
                                            ></i>
                                        </button>
                                        <button className="removeCart cart-icon">
                                            <i
                                                className="fa fa-duotone fa-circle-xmark"
                                                onClick={() => deleteQty(item)}
                                            ></i>
                                        </button>
                                    </div>
                                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                                </div>
                                <div className="cart-item-price"></div>
                            </div>
                        );
                    })}
                </div>

                <div className="cart-total product">
                    <h2>Tổng giỏ hàng</h2>
                    <div className=" d_flex">
                        <h4>Tổng Giá :</h4>
                        <h3>{totalPrice}.đồng</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button onClick={showModal} type="button" class=" mt-3 btn btn-success">
                            Thanh Toán
                        </button>
            <Modal title="Thanh toán" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} forceRender mask zIndex={999999999999} width="80%">
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
                            <input type="text" id="fname" name="firstname" placeholder="" />
                            <label htmlFor="phone">
                                <i className="fa fa-phone" /> Số điện thọai
                            </label>
                            <input type="text" id="phone" name="phone" placeholder="" />
                            <label htmlFor="adr">
                                <i className="fa fa-address-card-o" /> Địa chỉ
                            </label>
                            <input type="text" id="adr" name="address" placeholder="" />
                            <label htmlFor="city">
                                <i className="fa fa-institution" /> Thành phố
                            </label>
                            <input type="text" id="city" name="city" placeholder="" />
                            </div>
                            <div className="col-50">
                            <h5>Thanh toán</h5>
                            <label htmlFor="fname">Thẻ được chấp nhận</label>
                            <div className="icon-container">
                                <i className="fa fa-cc-visa" style={{ color: "navy" }} />
                                <i className="fa fa-cc-amex" style={{ color: "blue" }} />
                                <i className="fa fa-cc-mastercard" style={{ color: "red" }} />
                                <i className="fa fa-cc-discover" style={{ color: "orange" }} />
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
                                <input type="checkbox" name="nhang" /> Thanh toán sau khi nhận
                                hàng
                            </label>
                            </div>
                        </div>
                        <label>
                            <input type="checkbox" defaultChecked="checked" name="sameadr" />{" "}
                            Địa chỉ nhận hàng giống như thanh toán
                        </label>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </Modal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
