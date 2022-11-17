import React from 'react';
import Ndata from './Ndata';

const Cart = () => {
    return (
        <>
            <div className="content grid3 product">
                {Ndata.map((val, index) => {
                    return (
                        <div className="box" key={index}>
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <h5 className='d-flex justify-content-center mt-2'>{val.name}</h5>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Cart;
