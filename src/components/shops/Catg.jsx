import React, { useEffect, useState } from "react"
import axiosClient from "~/utils/http";

const Catg = () => {
  const [data,setData] = useState([]);

  
  const fetchPost = async () => {
    try {
        const response = await axiosClient('category');
        setData(response.data);
        // console.log(response);
    } catch (err) {
        console.error(err);
    }
};
useEffect(() => {
    fetchPost();
}, []);
  
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          {/* <h1>Brands </h1> */}
          <h1>Categoty </h1>
        </div>
        {data.map((value, index) =>  (
            <div className='box f_flex' key={index}>
              {/* <img src={value.image_brand} alt='' /> */}
              <span>{value.name_category}</span>
            </div>
          )
        )}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
