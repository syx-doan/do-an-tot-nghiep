import React from 'react';
import Home from '../components/MainPage/Home';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Discount from '../components/tintuc/TinTuc';
import Shop from '../components/shops/Shop';
import Annocument from '../components/annocument/Annocument';
import Wrapper from '../components/wrapper/Wrapper';
import NewSanPham from './../components/sanphammoi/SanPhamMoi';

const Pages = ({
    addToCart,
    CartItem,
    detailPro,
    handleTinTuc,
    url,
    CategoryId,
    categoryid,
    setCategory,
    tiTuc
}) => {
    return (
        <>
            <Home CartItem={CartItem} />
            <FlashDeals url={url} addToCart={addToCart} detailPro={detailPro} />
            <NewSanPham url={url} detailPro={detailPro} />
            <Discount handleTinTuc={handleTinTuc} tiTuc={tiTuc} url={url} />
            <Shop
                addToCart={addToCart}
                detailPro={detailPro}
                CategoryId={CategoryId}
                categoryid={categoryid}
                setCategory={setCategory}
                url={url}
            />
            <Annocument />
            <Wrapper />
        </>
    );
};

export default Pages;
