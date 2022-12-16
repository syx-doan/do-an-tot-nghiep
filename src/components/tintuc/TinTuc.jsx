import React from 'react';
import Ttcard from './TtCard';
import iconNews from '../../assets/images/icons/news.png';
const TinTuc = ({ handleTinTuc, url }) => {
    return (
        <>
            <section className="News background NewArrivals">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row1  f_flex">
                            <img src={iconNews} alt="" />
                            <h2>Tin tức</h2>
                        </div>
                    </div>
                    <Ttcard handleTinTuc={handleTinTuc} url={url} />
                </div>
            </section>
        </>
    );
};

export default TinTuc;