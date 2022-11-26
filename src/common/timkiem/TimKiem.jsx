import React, { useRef, useState } from 'react';

function TimKiem() {
    const handleTimKiem = (e) => {
        console.log(e.target.value);
    };

    return (
        <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Tìm kiếm sản phẩm..." onChange={handleTimKiem} />
            <span>ALL</span>
        </div>
    );
}

export default TimKiem;
