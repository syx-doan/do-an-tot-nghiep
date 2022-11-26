import React, { useEffect, useState } from "react"
import Ttcard from "./TtCard"
import iconNews from "../../assets/images/icons/news.png"
import axiosClient from "~/utils/http";
const TinTuc = () => {
  const [data, setData] = useState([]);
  const fetchPost = async () => {
    try {
      const response = await axiosClient('news');
      setData(response.data);
      // console.log(response.data)
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPost();
    // fetchPost1();
  }, []);

  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row1  f_flex'>
              <img src={iconNews} alt="" />
              <h2>Tin tức</h2>
            </div>
            <div className='heading-right row1 '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>
          <Ttcard />
        </div>
      </section>
    </>
  )
}

export default TinTuc
