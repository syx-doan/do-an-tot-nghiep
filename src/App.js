import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Header from './common/header/Header';
import Pages from './pages/Pages';
import Data from './components/Data';
import Cart from './common/giohang/Cart';
import Footer from './common/footer/Footer';
import Sdata from '~/components/shops/Sdata';
import Register from './common/register/Register';
import Login from './common/login/Login';
import Product from './components/MainPage/Product/Product';
import GioiThieu from './components/gioiThieu/GioiThieu';
import LienHe from './components/lienhe/LienHe';
import { toast, ToastContainer } from 'react-toastify';
import QuenMatKhau from './common/quenmatkhau/QuenMatKhau';


function App() {


    const success = () =>
        toast.success('Đã thêm vào giỏ hàng', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    const deleteProduct = () =>
        toast.success('Đã hủy sản phẩm', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    const { productItems } = Data;
    const { shopItems } = Sdata;

    //Step 2 :
    const [CartItem, setCartItem] = useState([]);

    //Step 4 :
    const addToCart = (product) => {
        const productExit = CartItem.find((item) => item.id === product.id);

        if (productExit) {
            setCartItem(
                CartItem.map((item) =>
                    item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item,
                ),
            );
        } else {
            setCartItem([...CartItem, { ...product, qty: 1 }]);
        }
        success();
    };

    // Stpe: 6
    const decreaseQty = (product) => {
        const productExit = CartItem.find((item) => item.id === product.id);

        if (productExit.qty === 1) {
            setCartItem(CartItem.filter((item) => item.id !== product.id));
        } else {
            setCartItem(
                CartItem.map((item) =>
                    item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item,
                ),
            );
        }
    };

    // Stpe: 7
    const deleteQty = (product) => {
        // const productExit = CartItem.find((item) => item.id === product.id);

        const index = CartItem.findIndex((x) => x.id === product.id);
        const newCartItem = [...CartItem];
        newCartItem.splice(index, 1);
        setCartItem(newCartItem);
        deleteProduct();
    };

    return (
        <>
            <Header CartItem={CartItem} />
            <ToastContainer />

            <Routes>
                <Route />
                <Route path="dangky" element={<Register />} />
                <Route path="dangnhap" element={<Login />} />
                <Route path="quenmatkhau" element={<QuenMatKhau />} exact/>
         
                <Route
                    path="sanpham"
                    element={<Product addToCart={addToCart} shopItems={shopItems} />}
                />
                {/* <Shop shopItems={shopItems} addToCart={addToCart} /> */}
                <Route path="gioithieu" element={<GioiThieu />} />
                <Route path="lienhe" element={<LienHe />} />
                <Route
                    path="/"
                    exact
                    element={
                        <Pages
                            productItems={productItems}
                            addToCart={addToCart}
                            shopItems={shopItems}
                        />
                    }
                />
                <Route
                    path="/cart"
                    exact
                    element={
                        <Cart
                            CartItem={CartItem}
                            addToCart={addToCart}
                            decreaseQty={decreaseQty}
                            deleteQty={deleteQty}
                        />
                    }
                />
            </Routes>
           
            <Footer />
        </>
    );
}

export default App;