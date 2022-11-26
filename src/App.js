import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import Header from './common/header/Header';
import Pages from './pages/Pages';
import Data from './components/Data';
import Cart from './common/giohang/Cart';
import Footer from './common/footer/Footer';
import Register from './common/register/Register';
import Login from './common/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import GioiThieu from './components/gioiThieu/GioiThieu';
import LienHe from './components/lienhe/LienHe';
import Product_Detail from './components/Product/Product_Detail';
import Shop from './components/shops/Shop';
import ThanhToanThanhCong from './common/ThanhToanThanhCong/ThanhToanThanhCong';
import DonHang from './common/donhang/DonHang';

function App() {
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
        toast.success('Đã hủy sản phẩm', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    const { productItems } = Data;

    //Step 2 :
    const [CartItem, setCartItem] = useState([]);

    const [productDetail, setProductDetail] = useState([]);

    //Step 4 :
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

    // Stpe: 8detail
    const detailPro = (products) => {
        const productExit = productDetail.find((item) => item.id_product === products.id_product);
        if (productExit) {
            setProductDetail(
                productDetail.map((item) =>
                    item.id_product === products.id_product ? { ...productExit, qty: 1 } : item,
                ),
            );
        } else {
            setProductDetail([{ ...products, qty: 1 }]);
        }
        console.log(productDetail);
    };

    // Lay id_category
    const [categoryid, setCategoryid] = useState();

    const CategoryProduct = (id) => {
        setCategoryid(id);
    };

    return (
        <>
            <Header CartItem={CartItem} />
            <ToastContainer />

            <Routes>
                <Route />
                <Route path="dangky" element={<Register />} />
                <Route path="dangnhap" element={<Login />} />
                <Route path="gioithieu" element={<GioiThieu />} />
                <Route path="lienhe" element={<LienHe />} />
                <Route
                    path="product_detail"
                    element={<Product_Detail productDetail={productDetail} addToCart={addToCart} />}
                />
                <Route
                    path="sanpham"
                    element={
                        <Shop
                            addToCart={addToCart}
                            detailPro={detailPro}
                            CategoryProduct={CategoryProduct}
                            categoryid={categoryid}
                        />
                    }
                />
                <Route path="gioithieu" element={<GioiThieu />} />
                <Route path="lienhe" element={<LienHe />} />donhang
                <Route path="donhang" element={<DonHang />} />
                <Route path="thanhtoanthanhcong" element={<ThanhToanThanhCong />} />
                <Route
                    path="/"
                    exact
                    element={
                        <Pages
                            productItems={productItems}
                            addToCart={addToCart}
                            detailPro={detailPro}
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