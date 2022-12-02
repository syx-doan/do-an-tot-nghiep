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
        // console.log(dataUser, 'here1');
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
                        src="https://assets.webiconspng.com/uploads/2016/12/User-Icon.png"
                        className={cx('dropdownimg')}
                        alt="avatar"
                    />
                    <div className={cx('dropdowncontent')}>
                        {dataUser.map((data) => {
                            return (
                                <>
                                    <h3 key={data.id}>{data?.fullname}</h3>
                                    <p>{data?.email}</p>
                                </>
                            );
                        })}
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
