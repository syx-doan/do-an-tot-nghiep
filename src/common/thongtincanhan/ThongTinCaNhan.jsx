import React from 'react';
import styles from './thongtincanhan.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ThongTinCaNhan() {
    return (
        <div className={cx('dropdown')}>
            <img
                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/41172/62eb6a5ac3504.jpg"
                className={cx('dropdownimg')}
                alt="avatar"
            />
            <div className={cx('dropdowncontent')}>
                <h3>Xin Chào </h3>
                <p>Syx Doab</p>
                <Link to={'/cart'}> Xem giỏ hàng</Link>
            </div>
        </div>
    );
}

export default ThongTinCaNhan;
