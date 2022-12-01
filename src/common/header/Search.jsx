import React  from 'react';
import logo from '../../assets/images/clickme.png';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import Logout from '~/components/logout/Logout';
import ThongTinCaNhan from '../thongtincanhan/ThongTinCaNhan';
import PropTypes from 'prop-types';
import TimKiem from '../timkiem/TimKiem';
Search.propTypes = {
    handlerSearch: PropTypes.func
};

Search.defaultProps = {
    handlerSearch: null
}

function Search({CartItem, ...props}) {

  


   
    return (
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width ">
                        <Link to="/">
                          
                            <img src={logo} alt="" />
                        </Link>
                    </div>

                        <TimKiem/>
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
