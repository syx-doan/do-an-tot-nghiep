import React from "react"
import "./wrapper.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Vận chuyển toàn quốc",
      decs: "Chúng tôi cam kết sẽ vận huyển sản phẩm đến nói một cách an toàn.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Thanh toán an toàn",
      decs: "Mọi thanh toán của quý khách đều được chúng tôi đảm bảo.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Mua sắm với sự tự tin ",
      decs: "Đến với chúng tôi mọi thông tin của quý khách đều được bảo mật.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Hỗ trợ 24/7 ",
      decs: "Chúng tôi sẽ giải đáp thắc mắc của quý khách 24/7.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
