import React from 'react';
import Home from '../components/MainPage/Home';
import FlashDeals from '../components/flashDeals/FlashDeals';
import TopCate from '../components/top/TopCate';
import Discount from '../components/tintuc/TinTuc';
import Shop from '../components/shops/Shop';
import Annocument from '../components/annocument/Annocument';
import Wrapper from '../components/wrapper/Wrapper';
import NewSanPham from './../components/sanphammoi/SanPhamMoi';

const Pages = ({ productItems, addToCart, CartItem, detailPro, CategoryProduct, categoryid }) => {
    return (
        <>
            <Home CartItem={CartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <NewSanPham />
            <Discount detailPro={detailPro} />
            <Shop
                addToCart={addToCart}
                detailPro={detailPro}
                CategoryProduct={CategoryProduct}
                categoryid={categoryid}
            />
            <Annocument />
            <Wrapper />
        </>
    );
};

export default Pages;
