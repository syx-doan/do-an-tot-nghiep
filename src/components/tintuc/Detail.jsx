import React from 'react';

const Detail = ({ productDetail }) => {
    return (
        <>
            <div className="news">
                <div className="image">
                    {productDetail.map((item) => {
                        return (
                            <>
                                <img
                                    src={`http://172.16.10.245/admin_dasboard/upload/product/${item.image}`}
                                    alt=""
                                    width="100px"
                                    height="70px"
                                />
                            </>
                        );
                    })}
                </div>
                <div className="content">
                    {productDetail.map((item) => {
                        return (
                            <>
                                <h2>Tin tức về {item.title}</h2>
                                <p className="text">{item.content}</p>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Detail;
