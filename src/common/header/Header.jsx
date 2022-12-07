import React from 'react';
import './Header.css';
import Head from './Head';
import Search from './Search';
import Navbar from './Navbar';

const Header = ({ CartItem, detailPro }) => {
    return (
        <>
            <Head />
            <Search CartItem={CartItem} detailPro={detailPro} />
            <Navbar />
        </>
    );
};

export default Header;
