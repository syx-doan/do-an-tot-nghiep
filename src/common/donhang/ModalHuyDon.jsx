import React from 'react';
import styles from '../modalLogin/modalLogin.module.scss';
import classNames from 'classnames/bind';
import { Modal } from 'antd';

const cx = classNames.bind(styles);

const ModalHuyDon = ({ handleCancelLogin, handleOkLogin, isModalOpenLogin }) => {
    const handleOkHuyDon = () => {
        handleOkLogin();
    };
    return (
        <Modal
            title="Xác nhận hủy đơn"
            open={isModalOpenLogin}
            onOk={handleOkHuyDon}
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
                    <b>Bạn xác định muốn hủy đơn hàng này</b>
                </h1>
                <button className={cx('content-buy-text')} onClick={() => handleOkHuyDon()}>Hủy đơn</button>
            </div>
        </Modal>
    );
};

export default ModalHuyDon;
