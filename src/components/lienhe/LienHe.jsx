import React from 'react';
import './lienhe.css';
function LienHe() {
    return (
        <div className="lienhe">
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
                    <form className="contact" action="" method="post">
                        <input
                            type="text"
                            name="name"
                            className="text-box"
                            placeholder="Họ và tên"
                            required=""
                        />
                        <input
                            type="email"
                            name="email"
                            className="text-box"
                            placeholder="Email"
                            required=""
                        />
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Lời nhắn"
                            required=""
                            defaultValue={''}
                        />
                        <button
                            onClick={(e) => e.preventDefault()}
                            // type="submit"
                            name="submit"
                            className="send-btn"
                            defaultValue="Gửi"
                        >
                            {' '}
                            Gửi
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LienHe;
