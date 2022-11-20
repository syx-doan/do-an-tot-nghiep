import React from 'react';
import './giohang.css';
import ThanhToan from './ThanhToan';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ CartItem, addToCart, decreaseQty, deleteQty }) => {
    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        navigate('/');
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="cart-items">
            <div className="container d_flex">
                <div className="cart-details">
                    {CartItem.length === 0 && (
                        <h1 className="no-items product">Không có sản phẩm được chọn</h1>
                    )}
                    {CartItem.map((item) => {
                        const productQty = item.price * item.qty;

                        return (
                            <div className="cart-list product d_flex" key={item.id_product}>
                                <div className="img">
                                    <img
                                        src={`http://172.16.27.88/admin_dasboard/upload/product/${item.image}`}
                                        alt=""
                                    />
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
                        <ThanhToan
                            handleOk={handleOk}
                            handleCancel={handleCancel}
                            isModalOpen={isModalOpen}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
