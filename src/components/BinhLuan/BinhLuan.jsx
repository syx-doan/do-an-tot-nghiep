/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axiosClient from '~/utils/http';
import './binhluan.scss';
import ThemBinhLuan from './ThemBinhLuan';

const BinhLuan = ({ url }) => {
    const [comment, setComment] = useState([]);
    const [users, setUsers] = useState([]);

    const dataIdProduct = JSON.parse(sessionStorage.getItem('data-idproduct'));

    const fetchPost = async () => {
        try {
            const response = await axiosClient('comments');
            setComment(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    const fetchPost1 = async () => {
        try {
            const response = await axiosClient('get');
            setUsers(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        fetchPost();
        fetchPost1();
    }, []);
    return (
        <div className="col p-9-6 t-12 m-12">
            <div className="f8row product__review">
                <div className="col p-12 m-12 t-12">
                    <div className="product__review-page">
                        <div className="product__review-head">BÌNH LUẬN</div>

                        <ThemBinhLuan url={url} />

                        <hr></hr>
                        {comment.map((item) => {
                            if (item.id_product === dataIdProduct) {
                                return (
                                    <>
                                        <a href="" className="product__review-link">
                                            <img
                                                src="https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"
                                                alt=""
                                                className="review__pane-img"
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
                                        <div className="review__pane-info">
                                            <div className="review__pane-action">
                                                <div
                                                    className="review__pane-action--left"
                                                    style={{ fontSize: 15 }}
                                                >
                                                    {item.comment}
                                                </div>
                                                <div className="review__pane-action--right">
                                                    <div
                                                        className="review__pane-time"
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