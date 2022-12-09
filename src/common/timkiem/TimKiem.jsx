import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './timkiem.module.scss';
import Poper from './../components/poper/Poper';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axiosClient from '~/utils/http';

const cx = classNames.bind(styles);
function TimKiem({ detailPro }) {
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showResult, setShowREsult] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const loadPosts = async () => {
            const response = await axiosClient.get('products');
            setPosts(response.data);
            setLoading(false);
        };
        loadPosts();
    }, []);
    const inputRef = useRef();
    //hàm tìm kiếm
    const onChangeHanler = (searchName) => {
        let matches = [];
        if (searchName.length > 0) {
            matches = posts.filter((products) => {
                const regex = new RegExp(`${searchName}`);
                return products.name.match(regex);
            });
        }
        console.log('matches', matches);
        setSuggestions(matches);
        setSearchName(searchName);
    };
    const handleHideResult = () => {
        setShowREsult(false);
    };
    const handleClear = () => {
        setSearchName('');
        setSuggestions([]);
        inputRef.current.focus();
    };

    return (
        <>
            <div className={cx('search-form')}>
                <HeadlessTippy
                    appendTo={() => document.body}
                    interactive
                    visible={showResult && setSuggestions.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <Poper>
                                <h4 className={cx('search-title')}>Sản Phẩm</h4>
                                {suggestions &&
                                    suggestions.map((item) => (
                                        <Link key={item.id_product}
                                            to={`product_detail`}
                                            className={cx('wrapper')}
                                            onClick={() =>
                                                detailPro(item.id_product, item.category_id)
                                            }
                                        >
                                            <div className={cx('info')}>
                                                <h4 className={cx('name')}>
                                                    <span>{item.name}</span>
                                                </h4>
                                            </div>
                                        </Link>
                                    ))}
                            </Poper>
                        </div>
                    )}
                    onClickOutside={handleHideResult}
                >
                    <div className={cx('search')}>
                        <input
                            ref={inputRef}
                            value={searchName}
                            placeholder="Tìm kiếm sản phẩm"
                            spellCheck={false}
                            onChange={(e) => onChangeHanler(e.target.value)}
                            onFocus={() => setShowREsult(true)}
                        />
                        {!!searchName && !loading && (
                            <button className={cx('clear')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                        <button
                            className={cx('search-btn')}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </HeadlessTippy>
            </div>
        </>
    );
}

export default TimKiem;
