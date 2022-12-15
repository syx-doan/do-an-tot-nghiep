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
                <p>Mã đơn hàng của bạn là <span className={cx('idsanpham')}>232132423232</span>.</p>
                <p>
                    Xem đơn hàng của bạn tại{' '}
                    <Link className={cx('link')} to="/donhang">
                        đơn hàng của bạn.
                    </Link>
                </p>
                <p>Thời gian dự kiến giao là 3-5 ngày(Tính từ ngày đặt hàng)</p>
                <Link to="/sanpham">
                    <button className={cx('button content-buy-text')}>Tiếp tục mua hàng</button>
                </Link>
            </div>
        </Modal>
    );
};

export default ThanhToanThanhCong;
