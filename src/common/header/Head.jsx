import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Head = () => {
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
        <>
            <section className="head">
                <div className="container d_flex">
                    <div className="left row1">
                        <i className="fa fa-phone"></i>
                        <label> +123 456 7890</label>
                        <i className="fa fa-envelope"></i>
                        <label> abc123@gmail.com</label>
                    </div>

                    <div className="right row1 RText dangky">
                        {!dataUser ? (
                            <>
                                <Link to={'/dangnhap'}>Đăng nhập</Link>
                                <Link to={'/dangky'}>Đăng ký</Link>
                            </>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Head;
