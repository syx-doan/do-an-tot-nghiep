import React from 'react';
import './Header.css';
import Head from './Head';
import Search from './Search';
import Navbar from './Navbar';

const Header = ({ detailPro }) => {
    return (
        <>
            <Head />
            <Search detailPro={detailPro} />
            <Navbar />
        </>
    );
};

export default Header;
