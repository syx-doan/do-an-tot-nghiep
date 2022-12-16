import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './lienhe.css';
import { toast, ToastContainer } from 'react-toastify';
const LienHe = () => {
    const success = () =>
        toast.success('Gửi thành công ', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3mhteog', 'template_sc5vey6', form.current, '4RoqjGtJgPi2sMdLY')
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
        success();

        e.target.reset();
    };

    return (
        <div className="lienhe">
            <ToastContainer />

            <div className="contact-section">
                <div className="contact-info">
                    <div>
                        <i className="fas fa-map" />
                        137 Nguyễn Thị Thập, Liên Chiểu, Đà Nẵng
                    </div>
                    <div>
                        <i className="fas fa-envelope" />
                        contact@email.com
                    </div>
                    <div>
                        <i className="fas fa-phone" />
                        +123 456 789
                    </div>
                    <div>
                        <i className="fas fa-clock" />
                        Thứ 2 - thứ 7 8h00 - 17h00{' '}
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Liên hệ với chúng tôi</h2>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="contact"
                        action=""
                        method="post"
                    >
                        <input
                            type="text"
                            name="user_name"
                            className="text-box"
                            placeholder="Họ và tên"
                            required=""
                        />
                        <input
                            type="email"
                            name="user_email"
                            className="text-box"
                            placeholder="Email của bạn"
                            required=""
                        />
                        <input
                            type="text"
                            name="subject"
                            className="text-box"
                            placeholder="Tiêu đề"
                            required=""
                        />
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Lời nhắn"
                            required=""
                            defaultValue={''}
                        />
                        <button name="submit" className="send-btn" defaultValue="Gửi">
                            Gửi
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LienHe;
