import React from 'react';
import styles from './logout.module.scss';
import classNames from 'classnames/bind';
import { toast, ToastContainer } from 'react-toastify';
const cx = classNames.bind(styles);
const Logout = () => {
    const success = () =>
        toast.warning('Đã đăng xuất tài khoản ', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    const handleLogout = async ()  => {
        localStorage.clear();
         sessionStorage.clear();
         window.location.href = '/';
        await success();
        
    };

    return (
        <div className={cx('logout', '')}>
            <ToastContainer />
            <svg
                className={cx('icon-logout')}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
            >
                <path
                    fill="#999999"
                    d="M12 10v-2h-5v-2h5v-2l3 3zM11 9v4h-5v3l-6-3v-13h11v5h-1v-4h-8l4 2v9h4v-3z"
                ></path>
            </svg>
            <button onClick={handleLogout} className={cx('buttonLogout')}>
                Đăng xuất
            </button>
        </div>
    );
};

export default Logout;
