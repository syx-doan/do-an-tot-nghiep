/* eslint-disable no-redeclare */
import React from 'react';
import './giohang.css';
import ThanhToan from '../thanhtoan/ThanhToan';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ThanhToanThanhCong from '../ThanhToanThanhCong/ThanhToanThanhCong';
import axiosClient from '~/utils/http';

const Cart = ({ clear, addToCart, decreaseQty, deleteQty, url }) => {
    if(JSON.parse(sessionStorage.getItem('data-cart'))) {
        var CartItem = JSON.parse(sessionStorage.getItem('data-cart'));
    } else {
        var CartItem = [];
    }

    const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalThanhToanOpen, setIsModalThanhToanOpen] = useState(false);
    const navigate = useNavigate();

    const [dataUser] = useState(JSON.parse(localStorage.getItem('data-user')));

    const checkoutErr = () =>
        toast.error('Đặt hàng thành công ', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    // hàm mở modal thanh toán
    const showModal = () => {
        if (dataUser) {
            setIsModalOpen(true);
        } else {
            navigate('/dangnhap');
        }
    };

    //hàm thanh toán giỏ hàng
    const handleOk = (data) => {
        const newData = {
            ...data,
            carts: CartItem,
        };
        try {
            axiosClient.post('thanhtoan', { data: newData });

            handleCancel();
            showModalThanhToan();
        } catch (error) {
            checkoutErr();
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    //

    const showModalThanhToan = () => {
        setIsModalThanhToanOpen(true);
    };

    const handleOkThanhToan = () => {
        navigate('/sanpham');
    };

    const handleCancelThanhToan = () => {
        setIsModalThanhToanOpen(false);
    };

    return (
        <section className="cart-items">
            <ToastContainer />
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
                                    <img src={`${url}${item.image}`} alt="" />
                                </div>
                                <div className="cart-details">
                                    <h3>{item.name}</h3>
                                    <h4>
                                        {item.price.toLocaleString('us-US')} đ * {item.qty}
                                        <span>{productQty.toLocaleString('us-US')} đ</span>
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
                        <h3>{totalPrice.toLocaleString('us-US')} đồng</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button onClick={showModal} type="button" class=" mt-3 btn btn-success">
                            Thanh Toán
                        </button>
                        <ThanhToan
                            handleOk={handleOk}
                            handleCancel={handleCancel}
                            isModalOpen={isModalOpen}
                            clear={clear}
                        />
                        <ThanhToanThanhCong
                            handleOkThanhToan={handleOkThanhToan}
                            handleCancelThanhToan={handleCancelThanhToan}
                            isModalOpenThanhToan={isModalThanhToanOpen}
                        />
                        ;
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
