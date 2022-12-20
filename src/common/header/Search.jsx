/* eslint-disable no-redeclare */
import logo from '../../assets/images/clickme.png';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import Logout from '~/common/logout/Logout';
import ThongTinCaNhan from '../thongtincanhan/ThongTinCaNhan';
import PropTypes from 'prop-types';
import TimKiem from '../timkiem/TimKiem';
Search.propTypes = {
    handlerSearch: PropTypes.func,
};

Search.defaultProps = {
    handlerSearch: null,
};

function Search({ detailPro }) {
    const CartItem = JSON.parse(sessionStorage.getItem('data-cart'));
    var lenth = 0;
    if (CartItem) {
        var lenth = CartItem.length;
    }
    return (
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width ">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>

                    <TimKiem detailPro={detailPro} />
                    <div className="icon f_flex width">
                        <Popover
                            style={{
                                left: '1063px',
                                top: '218px',
                                transformOrigin: '274.031px -4px',
                            }}
                            placement="bottomRight"
                            title={<ThongTinCaNhan />}
                            content={<Logout />}
                            trigger="click"
                        >
                            <i className="fa fa-user icon-circle"></i>
                        </Popover>
                        <div className="cart">
                            <Link to="/cart">
                                <i className="fa fa-shopping-bag icon-circle"></i>
                                <span>{lenth}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Search;
