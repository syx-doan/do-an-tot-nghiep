import React from 'react';
import logo from '../../assets/images/clickme.png';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import Logout from '~/components/logout/Logout';
import ThongTinCaNhan from '../thongtincanhan/ThongTinCaNhan';

const Search = ({ CartItem }) => {
    // fixed Header
    window.addEventListener('scroll', function () {
        const search = document.querySelector('.search');
        search.classList.toggle('active', window.scrollY > 100);
    });



   
    return (
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width ">
                        <Link to="/">
                          
                            <img src={logo} alt="" />
                        </Link>
                    </div>

                    <div className="search-box f_flex">
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                        <span>ALL</span>
                    </div>

                    <div className="icon f_flex width">
                        <Popover
                            style={{
                                left: '1063px',
                                top: '218px',
                                transformOrigin: '274.031px -4px',
                            }}
                            placement="bottomRight"
                            title={<ThongTinCaNhan/>}
                            content={<Logout/>}
                            trigger="click"
                        >
                            <i className="fa fa-user icon-circle"></i>
                        </Popover>
                        <div className="cart">
                            <Link to="/cart">
                                <i className="fa fa-shopping-bag icon-circle"></i>
                                <span>{CartItem.length === 0 ? '' : CartItem.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Search;
