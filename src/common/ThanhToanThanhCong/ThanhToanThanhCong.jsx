import React from 'react';
import styles from './thanhtoanthanhcong.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

const cx = classNames.bind(styles);

const ThanhToanThanhCong = ({ handleCancelThanhToan, handleOkThanhToan, isModalOpenThanhToan }) => {
    return (
        <Modal
            open={isModalOpenThanhToan}
            onOk={handleOkThanhToan}
            onCancel={handleCancelThanhToan}
            forceRender
            mask
            zIndex={999}
            width="50%"
        >
            <div className={cx('man')}>
                <div className={cx('icon')}>
                    <i className="fa fa-sharp fa-solid fa-circle-check"></i>
                </div>

                <h1>
                    <b>Thanh toán thành công</b>
                </h1>
                <p>
                    Xem đơn hàng của bạn tại{' '}
                    <Link className={cx('link')} to="/donhang">
                        đơn hàng của bạn.
                    </Link>
                </p>
                <p>Thời gian dự kiến giao là 3-5 ngày(Tính từ ngày đặt hàng)</p>
            </div>
        </Modal>
    );
};

export default ThanhToanThanhCong;
