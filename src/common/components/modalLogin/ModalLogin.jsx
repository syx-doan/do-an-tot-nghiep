import React from 'react';
import styles from './modalLogin.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

const cx = classNames.bind(styles);

const ModalLogin = ({ handleCancelLogin, handleOkLogin, isModalOpenLogin }) => {
    return (
        <Modal
            // title="Thanh toán thành công"
            open={isModalOpenLogin}
            onOk={handleOkLogin}
            onCancel={handleCancelLogin}
            forceRender
            mask
            zIndex={999}
            width="50%"
        >
            <div className={cx('man')}>
                <div className={cx('icon')}>
                    <i className="fa fa-solid fa-circle-exclamation"></i>
                </div>

                <h1>
                    <b>Đăng nhập để thanh toán</b>
                </h1>
                <Link to="/dangnhap">
                    <button className={cx('btn-13','custom-btn','mt-5')}>Đăng nhập</button>
                </Link>
            </div>
        </Modal>
    );
};

export default ModalLogin;
