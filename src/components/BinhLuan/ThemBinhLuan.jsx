import React, { useState } from 'react';
import axiosClient from '~/utils/http';

import classNames from 'classnames/bind';
import styles from '../BinhLuan/binhluan/binhluan.module.scss';
const cx = classNames.bind(styles);

const ThemBinhLuan = () => {
    const dataUser = JSON.parse(localStorage.getItem('data-user'));
    const [comment, setComment] = useState('');
    const idProduct = JSON.parse(sessionStorage.getItem('data-idproduct'));

    const onChangeBinhLuan = (e) => {
        const value = e.target.value;
        setComment(value);
    };

    function formatDate(date) {
        if (!date) return;
        const hours = `0${date.getHours()}`.slice(-2);
        const minutes = `0${date.getMinutes()}`.slice(-2);
        const seconds = `0${date.getSeconds()}`.slice(-2);
        const ngay = `0${date.getDate()}`.slice(-2);
        const thang = `0${date.getMonth()}`.slice(-2);
        const nam = `${date.getFullYear()}`;
        return `${hours}:${minutes}:${seconds} - Ngày ${ngay}/${thang}/${nam}`;
    }

    const now = new Date();
    const newTimeString = formatDate(now);

    const handleSubmitBinhLuan = (e) => {
        e.preventDefault();
        if (dataUser) {
            if (comment !== '') {
                const idUser = dataUser[0].id_user;
                axiosClient.post('comment', {
                    comment,
                    idProduct,
                    idUser,
                    newTimeString,
                });
                setComment('');
            }
        }
        var reset = document.getElementsByTagName('form')[0];
        reset.reset();
    };

    if (dataUser) {
        return (
            <>
                <form className={cx('form-inline')} action="">
                    <div className={cx('form-group mx-sm-3 mb-2')}>
                        <div className={cx('inforuser')}>
                            <i className={cx('fa-solid fa-user icon-user')}></i>
                        </div>
                        <input
                            onChange={onChangeBinhLuan}
                            type="text"
                            className={cx('form-control input-binhluan')}
                            id="binhluan"
                            placeholder="Bình luận"
                        />
                        <button
                            type="button"
                            onClick={handleSubmitBinhLuan}
                            className={cx('btn-binhluan')}
                        >
                            <b>Bình luận</b>
                        </button>
                    </div>
                </form>
            </>
        );
    }
};

export default ThemBinhLuan;
