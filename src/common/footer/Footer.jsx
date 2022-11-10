import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>CLICKME</h1>
            <p>Chúng tôi tin rằng chúng tôi là xuất sắc. Không phải vì chúng tôi nói nó, mà bởi vì chúng tôi làm việc chăm chỉ. Chúng tôi tận tâm, tận tụy và tập trung.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h3>Sản phẩm</h3>
            <ul className="paddingleft">
              <li>Điện thoại</li>
              <li>Máy tính</li>
              <li>Laptop</li>
              <li>Tai nghe</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Chăm sóc khách hàng</h3>
            <ul>
              <li>Mua thế nào </li>
              <li>Theo dõi đơn hàng </li>
              <li>Công ty & Mua hàng loạt </li>
              <li>Trả lại và hoàn lại tiền</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Liên hệ</h3>
            <ul>
              <li>137 Nguyễn Thị Thập, Liên Chiểu, Đà Nẵng </li>
              <li>Email: abc.help@gmail.com</li>
              <li>Phone: +0 123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
