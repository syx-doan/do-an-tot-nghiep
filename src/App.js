/* eslint-disable no-redeclare */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Header from './common/header/Header';
import Pages from './pages/Pages';
import Cart from './common/giohang/Cart';
import Footer from './common/footer/Footer';
import Register from './common/register/Register';
import Login from './common/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import GioiThieu from './components/gioiThieu/GioiThieu';
import LienHe from './components/lienhe/LienHe';

import Shop from './components/shops/Shop';
import ThanhToanThanhCong from './common/ThanhToanThanhCong/ThanhToanThanhCong';
import DonHang from './common/donhang/DonHang';
import QuenMatKhau from './common/quenmatkhau/QuenMatKhau';
import Detail from './components/tintuc/Detail';
import ProductDetail from './components/Product/ProductDetail';

function App() {
    // const [CartItem, setCartItem] = useState([]);
    const [productDetail, setProductDetail] = useState([]);
    const [categoryid, setCategoryid] = useState();

    const success = () =>
        toast.success('Đã thêm vào giỏ hàng', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    const deleteProduct = () =>
        toast.error('Đã xóa sản phẩm khỏi giỏ hàng', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });

    //Step 2 :

    const url = 'http://localhost/admin_dasboard/upload/product/';

    //Step 4 :

    if (JSON.parse(sessionStorage.getItem('data-cart'))) {
        var [CartItem, setCartItem] = useState(JSON.parse(sessionStorage.getItem('data-cart')));
    } else {
        var [CartItem, setCartItem] = useState([]);
    }
    const addToCart = (product) => {
        const productExit = CartItem.find((item) => item.id_product === product.id_product);

        if (productExit) {
            setCartItem(
                CartItem.map((item) =>
                    item.id_product === product.id_product
                        ? { ...productExit, qty: productExit.qty + 1 }
                        : item,
                ),
            );
        } else {
            setCartItem([...CartItem, { ...product, qty: 1 }]);
        }
        success();
    };

    // clear
    const clearCart = () => {
        setCartItem([]);
    }

    sessionStorage.setItem('data-cart', JSON.stringify(CartItem));

    // Stpe: 6
    const decreaseQty = (product) => {
        const productExit = CartItem.find((item) => item.id_product === product.id_product);

        if (productExit.qty === 1) {
            setCartItem(CartItem.filter((item) => item.id_product !== product.id_product));
        } else {
            setCartItem(
                CartItem.map((item) =>
                    item.id_product === product.id_product
                        ? { ...productExit, qty: productExit.qty - 1 }
                        : item,
                ),
            );
        }
    };

    // Stpe: 7
    const deleteQty = (product) => {
        const index = CartItem.findIndex((x) => x.id === product.id);
        const newCartItem = [...CartItem];
        newCartItem.splice(index, 1);
        setCartItem(newCartItem);
        deleteProduct();
    };

    const detailTinTuc = (products) => {
        const productExit = productDetail.find((item) => item.id_news === products.id_news);
        if (productExit) {
            setProductDetail(
                productDetail.map((item) =>
                    item.id_news === products.id_news ? { ...productExit } : item,
                ),
            );
        } else {
            setProductDetail([{ ...products }]);
        }
    };

    const detailPro = (id_product, id_category) => {
        sessionStorage.setItem('data-idproduct', JSON.stringify(id_product));
        sessionStorage.setItem('data-category', JSON.stringify(id_category));

        //demo backtotop
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Lay id_category
    const CategoryProduct = (id) => {
        setCategoryid(id);
    };

    const setCategory = () => {
        setCategoryid(undefined);
    };

    return (
        <>
            <Header detailPro={detailPro} />
            <ToastContainer />

            <Routes>
                <Route />
                <Route path="dangky" element={<Register />} />
                <Route path="dangnhap" element={<Login />} />
                <Route path="quenmatkhau" element={<QuenMatKhau />} />
                <Route path="gioithieu" element={<GioiThieu />} />
                <Route path="lienhe" element={<LienHe />} />
                <Route
                    path="product_detail"
                    element={
                        <ProductDetail
                            productDetail={productDetail}
                            addToCart={addToCart}
                            detailPro={detailPro}
                            url={url}
                        />
                    }
                />
                <Route
                    path="sanpham"
                    element={
                        <Shop
                            addToCart={addToCart}
                            detailPro={detailPro}
                            CategoryProduct={CategoryProduct}
                            categoryid={categoryid}
                            setCategory={setCategory}
                            url={url}
                        />
                    }
                />
                <Route path="gioithieu" element={<GioiThieu />} />
                <Route path="lienhe" element={<LienHe />} />
                <Route path="tintuc" element={<Detail productDetail={productDetail} url={url} />} />
                <Route path="donhang" element={<DonHang />} />
                <Route path="thanhtoanthanhcong" element={<ThanhToanThanhCong />} />
                <Route
                    path="/"
                    exact
                    element={
                        <Pages
                            addToCart={addToCart}
                            detailPro={detailPro}
                            detailTinTuc={detailTinTuc}
                            categoryid={categoryid}
                            CategoryProduct={CategoryProduct}
                            url={url}
                        />
                    }
                />
                <Route
                    path="/cart"
                    exact
                    element={
                        <Cart
                            addToCart={addToCart}
                            decreaseQty={decreaseQty}
                            deleteQty={deleteQty}
                            url={url}
                            clear={clearCart}
                        />
                    }
                />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
