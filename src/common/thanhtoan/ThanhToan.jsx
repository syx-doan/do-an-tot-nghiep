// import React from 'react';
// import { Modal } from 'antd';
// import './thanhtoan.scss';
// // import CartVisa from './../cartvisa/CartVisa';
// import { useState, useEffect } from 'react';

// import { isEmpty } from 'validator';
// import { ToastContainer } from 'react-toastify';

// function ThanhToan({ handleCancel, isModalOpen, handleOk }) {
//     const [dataUser, setData] = useState(JSON.parse(localStorage.getItem('data-user')));
//     const [address, setAddress] = useState('');
//     const [validateMsg, setValidateMsg] = useState('');

//     const validateAll = () => {
//         const msg = {};

//         if (isEmpty(address)) {
//             msg.address = 'Vui lòng nhập địa chỉ ';
//         }

//         setValidateMsg(msg);
//         if (Object.keys(msg).length > 0) return false;
//         return true;
//     };
//     if (dataUser) {
//         var { id_user, fullname, phone } = dataUser[0];
//     } else {
//         var { id_user, fullname, phone } = [];
//     }

//     const handleThanhToan = () => {
//         const isValidate = validateAll();
//         if (!isValidate) return;

//         const data = { id_user, address, fullname };
//         handleOk(data);
//     };
//     useEffect(() => {
//         const dataUser = JSON.parse(localStorage.getItem('data-user'));
//         if (dataUser && dataUser !== 'null') {
//             setData(dataUser);
//         } else {
//             setData(false);
//         }
//     }, []);

//     return (
//         <Modal
//             title="Thanh toán"
//             open={isModalOpen}
//             onOk={handleThanhToan}
//             onCancel={handleCancel}
//             forceRender
//             mask
//             zIndex={99}
//             width="80%"
//         >
//             <div className="thanhtoan">
//                 <ToastContainer />

//                 <div className="row">
//                     <div class="checkout-wrap">
//                         <ul class="checkout-bar">
//                             <li class="visited first">
//                                 <a href="!#">Đăng nhập</a>
//                             </li>

//                             <li class="previous visited">Thêm vào giỏ hàng</li>

//                             <li class="active">Thanh toán</li>

//                             <li class="next">Thanh toán thành công</li>

//                             <li class="">Hoàn thành</li>
//                         </ul>
//                     </div>
//                     <div className="col-75">
//                         <div className="container">
//                             <form action="/action_page.php">
//                                 <div className="row">
//                                     <div className="col-50">
//                                         <label htmlFor="adr">
//                                             <i className="fa fa-address-card-o" />
//                                             Tên nhận hàng
//                                         </label>
//                                         <input
//                                             value={fullname}
//                                             type="text"
//                                             id="adr"
//                                             name="address"
//                                             placeholder="Nhập..."
//                                         />
//                                         <label htmlFor="adr">
//                                             <i className="fa fa-address-card-o" />
//                                             Số điện thoại
//                                         </label>
//                                         <input
//                                             value={phone}
//                                             type="text"
//                                             id="adr"
//                                             name="address"
//                                             placeholder="Nhập..."
//                                         />
//                                         <label htmlFor="adr">
//                                             <i className="fa fa-address-card-o" />
//                                             Địa chỉ chi tiết
//                                         </label>
//                                         <input
//                                             onChange={(e) => {
//                                                 setAddress(e.target.value);
//                                             }}
//                                             type="text"
//                                             id="adr"
//                                             name="address"
//                                             placeholder="Nhập..."
//                                         />
//                                         <div className="d-flex mt-n1">
//                                             <div className="validateMsg">{validateMsg.address}</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <label>
//                                     <input
//                                         type="checkbox"
//                                         defaultChecked="checked"
//                                         name="sameadr"
//                                     />
//                                     Địa chỉ thanh toán mặc định
//                                 </label>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Modal>
//     );
// }

// export default ThanhToan;

import React from 'react';
import { Modal } from 'antd';
import './thanhtoan.scss';
// import CartVisa from './../cartvisa/CartVisa';
import { useState, useEffect } from 'react';

import { isEmpty } from 'validator';
import { ToastContainer } from 'react-toastify';

function ThanhToan({ handleCancel, isModalOpen, handleOk }) {
    const [dataUser, setData] = useState(JSON.parse(localStorage.getItem('data-user')));
    const [address, setAddress] = useState('');
    const [validateMsg, setValidateMsg] = useState('');

    const validateAll = () => {
        const msg = {};

        if (isEmpty(address)) {
            msg.address = 'Vui lòng nhập địa chỉ ';
        }

        setValidateMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };
    const { id_user, fullname, phone } = dataUser[0];

    const handleThanhToan = () => {
        const isValidate = validateAll();
        if (!isValidate) return;

        const data = { id_user, address, fullname };
        handleOk(data);
    };
    useEffect(() => {
        const dataUser = JSON.parse(localStorage.getItem('data-user'));
        if (dataUser && dataUser !== 'null') {
            setData(dataUser);
        } else {
            setData(false);
        }
    }, []);

    return (
        <Modal
            title="Thanh toán"
            open={isModalOpen}
            onOk={handleThanhToan}
            onCancel={handleCancel}
            forceRender
            mask
            zIndex={99}
            width="80%"
        >
            <div className="thanhtoan">
                <ToastContainer />

                <div className="row">
                    <div class="checkout-wrap">
                        <ul class="checkout-bar">
                            <li class="visited first">
                                <a href="!#">Đăng nhập</a>
                            </li>

                            <li class="previous visited">Thêm vào giỏ hàng</li>

                            <li class="active">Thanh toán</li>

                            <li class="next">Thanh toán thành công</li>

                            <li class="">Hoàn thành</li>
                        </ul>
                    </div>
                    <div className="col-75">
                        <div className="container">
                            <form action="/action_page.php">
                                <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="adr">
                                            <i className="fa fa-address-card-o" />
                                            Tên nhận hàng
                                        </label>
                                        <input
                                            value={fullname}
                                            type="text"
                                            id="adr"
                                            name="address"
                                            placeholder="Nhập..."
                                        />
                                        <label htmlFor="adr">
                                            <i className="fa fa-address-card-o" />
                                            Số điện thoại
                                        </label>
                                        <input
                                            value={phone}
                                            type="text"
                                            id="adr"
                                            name="address"
                                            placeholder="Nhập..."
                                        />
                                        <label htmlFor="adr">
                                            <i className="fa fa-address-card-o" />
                                            Địa chỉ chi tiết
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                setAddress(e.target.value);
                                            }}
                                            type="text"
                                            id="adr"
                                            name="address"
                                            placeholder="Nhập..."
                                        />
                                        <div className="d-flex mt-n1">
                                            <div className="validateMsg">{validateMsg.address}</div>
                                        </div>
                                    </div>
                                </div>
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked="checked"
                                        name="sameadr"
                                    />
                                    Địa chỉ thanh toán mặc định
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ThanhToan;
