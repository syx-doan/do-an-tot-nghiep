/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axiosClient from '~/utils/http';

import ThemBinhLuan from '../ThemBinhLuan';
import classNames from 'classnames/bind';
import styles from './binhluan.module.scss';
const cx = classNames.bind(styles);

const BinhLuan = ({ url }) => {
    const [comment, setComment] = useState([]);
    const [users, setUsers] = useState([]);

    const dataIdProduct = JSON.parse(sessionStorage.getItem('data-idproduct'));

    const fetchComment = async () => {
        try {
            const response = await axiosClient('comments');
            setComment(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    const fetchUsers = async () => {
        try {
            const response = await axiosClient('users');
            setUsers(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        fetchComment();
        fetchUsers();
    }, [comment]);
    return (
        <div className={cx('col p-9-6 t-12 m-12')}>
            <div className={cx('f8row product__review')}>
                <div className={cx('col p-12 m-12 t-12')}>
                    <div className={cx('product__review-page')}>
                        <div className={cx('comment')}>
                            <b>BÌNH LUẬN</b>
                        </div>

                        <ThemBinhLuan url={url} />

                        <hr></hr>
                        {comment.map((item) => {
                            if (item.id_product === dataIdProduct) {
                                return (
                                    <>
                                        <a href="" className={cx('product__review-link')}>
                                            <img
                                                src="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"
                                                alt=""
                                                className={cx('review__pane-img')}
                                            />
                                        </a>
                                        {users.map((val) => {
                                            if (val.id_user === item.id_user) {
                                                return (
                                                    <b style={{ fontSize: 15 }}>{val.fullname}</b>
                                                );
                                            } else {
                                                return <></>;
                                            }
                                        })}
                                        <div className={cx('review__pane-info')}>
                                            <div className={cx('review__pane-action')}>
                                                <div
                                                    className={cx('review__pane-action--left')}
                                                    style={{ fontSize: 15 }}
                                                >
                                                    {item.content}
                                                </div>
                                                <div className={cx('review__pane-action--right')}>
                                                    <div
                                                        className={cx('review__pane-time')}
                                                        style={{ fontSize: 15 }}
                                                    >
                                                        <b>{item.ngaybinhluan}</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <hr />
                                    </>
                                );
                            } else {
                                return <></>;
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BinhLuan;
