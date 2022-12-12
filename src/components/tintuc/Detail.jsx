import React from 'react';

const Detail = ({ tiTuc, url }) => {
    return (
        <>
            <div className="news">
                <div className="image">
                    {tiTuc.map((item) => {
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
                    {tiTuc.map((item) => {
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
