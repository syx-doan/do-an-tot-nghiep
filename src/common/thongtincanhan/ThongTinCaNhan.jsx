import React from 'react';
import styles from './thongtincanhan.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function ThongTinCaNhan() {
    const [dataUser, setDataUser] = useState(JSON.parse(localStorage.getItem('data-user')));

    useEffect(() => {
        const dataUser = JSON.parse(localStorage.getItem('data-user'));
        if (dataUser && dataUser !== 'null') {
            setDataUser(dataUser);
        } else {
            setDataUser(false);
        }
    }, []);

    return (
        <div>
            {dataUser ? (
                <div className={cx('dropdown')}>
                    <img
                        src="https://files.fullstack.edu.vn/f8-prod/user_avatars/41172/62eb6a5ac3504.jpg"
                        className={cx('dropdownimg')}
                        alt="avatar"
                    />
                    <div className={cx('dropdowncontent')}>
                        {/* Author by TheThinh
                        * Pls not fix
                        */}
                        <h3>{dataUser.data?.fullname}</h3>
                        <p>{dataUser.data?.email}</p>
                        <Link to={'/cart'}> Xem giỏ hàng</Link>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default ThongTinCaNhan;
