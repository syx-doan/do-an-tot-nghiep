import React from 'react';
import styles from './gioithieu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function GioiThieu() {
    return (
        <div>
            <section className={cx('about-section')}>
                <div className={cx('container')}>
                    <div className={cx('row clearfix')}>
                        {/*Content Column*/}
                        <div className={cx('content-column', 'col-md-6 col-sm-12 col-xs-12')}>
                            <div className={cx('inner-column')}>
                                <div className={cx('sec-title')}>
                                    <div className={cx('title')}>Giới thiệu chung</div>
                                    <h2>
                                        We Are The Leader In <br /> Technology Equipment
                                    </h2>
                                </div>
                                <div className={cx('text')}>
                                    Kính thưa quý khách, chúng tôi những người mới bắt đầu với sản
                                    phẩm thiêt bị công nghệ chúng tôi vẫn còn nhiều thiếu sót, nhưng
                                    với định hướng chiến lược rõ ràng, lộ trình vững chất xuyên suốt
                                    là "chất lượng và uy tính".Chúng tôi muốn màng đến khách hàng
                                    những sản phẩm đạt chuẩn với giá tiền hợp lí.
                                </div>
                                <div className={cx('email')}>
                                    Yêu cầu báo giá:
                                    <span className={cx('theme_color')}>abc@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        {/*Image Column*/}
                        <div className={cx('image-column', 'col-md-6 col-sm-12 col-xs-12')}>
                            <div
                                className="inner-column"
                                data-wow-delay="0ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="image">
                                    <img src="https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('container-bottom')}>
                        <div className={cx('row bottom')}>
                            {/*content Horizontal */}
                            <div className={cx('content-horizontal')}>
                                <div className={cx('inner-horizontal')}>
                                    <div className={cx('sec-title')}>
                                        <div className={cx('title-horizontal')}>Tầm nhìn</div>
                                    </div>
                                    <div className={cx('text')}>
                                        Cùng với sự phát triển của xã hội và thị trường công nghệ,
                                        chúng tôi đang và sẽ nỗ lực không ngừng để trở thành đối tác
                                        uy tín đối với các nhà sản xuất Kỹ thuật số hàng đầu thế
                                        giới, đồng thời là điểm đến tin cậy của khách hàng Việt Nam.
                                    </div>
                                </div>
                                <div className={cx('sec-title')}>
                                    <div className={cx('title-horizontal')}>Sứ mệnh</div>
                                </div>
                                <div className={cx('text')}>
                                    Chúng tôi hy vọng sẽ trở thành nhà tiên phong đưa những sản phẩm
                                    công nghệ mới nhất đến tay người dùng sớm nhất, tạo ra cuộc sống
                                    hiện đại nơi công nghệ kết nối con người, công nghệ phục vụ con
                                    người
                                </div>

                                <div className={cx('sec-title')}>
                                    <div className={cx('title-horizontal')}>Tôn chỉ hoạt động</div>
                                </div>
                                <div className={cx('text')}>
                                Click me luôn hoạt động dựa trên tôn chỉ đặt khách hàng là trung tâm, 
                                mọi nỗ lực để đạt được mục tiêu cao nhất là làm hài lòng người dùng 
                                thông qua các sản phẩm được cung cấp và dịch vụ khách hàng. 
                                Click me đang từng bước xây dựng dịch vụ khách hàng vượt trội,
                                xứng đáng là đơn vị bán lẻ hàng đầu tại Việt Nam. Sự tin tưởng
                                và ủng hộ nhiệt tình của quý khách hàng đã phần nào khẳng định
                                hiệu quả hoạt động của đội ngũ nhân viên Click me.
                                <br></br>
                                <b>Đối với quý khách hàng</b>, chúng tôi luôn đặt cái tâm làm gốc, làm việc với tinh thần nghiêm túc, trung thực và có trách nhiệm, để mang tới trải nghiệm dịch vụ tốt nhất. 
                                <br></br>
                                <b>Đối với đồng nghiệp</b>, chúng tôi đề cao văn hóa học hỏi, đoàn kết, tương trợ lẫn nhau tạo nên môi trường làm việc tôn trọng - công bằng - văn minh cho nhân viên trong công ty. 
                                <br></br>
                                <b>Đối với các đối tác</b>, Click me luôn làm việc dựa trên nguyên tắc tôn trọng, cùng tạo ra giá trị cho cộng đồng và cùng phát triển bền vững.  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GioiThieu;
