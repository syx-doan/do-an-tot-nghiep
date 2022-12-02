import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './timkiem.scss';

function TimKiem() {
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            const response = await axios.get('http://localhost:4000/api/products');
            setPosts(response.data);
        };
        loadPosts();
    }, []);
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

    return (
        <>
            <div className="search-box f_flex">
                <i className="fa fa-search"></i>
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    onChange={(e) => onChangeHanler(e.target.value)}
                    value={searchName}
                />
                <span>ALL</span>
            </div>

            {suggestions &&
                suggestions.map((item, i) => (
                    <div key={i} className="col-md-12 justify-content">
                        {item.name}
                    </div>
                ))}
        </>
    );
}

export default TimKiem;
