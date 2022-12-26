import React from 'react';
import './Header.css';
import Head from './Head';
import Search from './Search';
import Navbar from './Navbar';

const Header = ({ detailPro }) => {
    return (
        <>
        <div className='haeder_all'>
            <Head />
            <Search detailPro={detailPro} />
            <Navbar />
        </div>
        </>
    );
};

export default Header;
