import React from 'react';

const Detail = ({ productDetail, url }) => {
    return (
        <>
            <div className="news">
                <div className="image">
                    {productDetail.map((item) => {
                        return (
                            <>
                                <img
                                    src={`${url}${item.image}`}
                                    alt=""
                                    width="100px"
                                    height="auto"
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
