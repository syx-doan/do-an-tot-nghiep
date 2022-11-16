import React from "react"
import { Link } from 'react-router-dom';

const Danhmuc = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
      path:'/apple'
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-2.png",
       cateName: "Sony"
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Danh sách</h1>
        </div>
        {data.map((value, index) => {
          return (
          <Link to={value.path}>
              <div className='box f_flex' key={index}>
                <img src={value.cateImg} alt='' />
                <span>{value.cateName}</span>
              </div>
          </Link>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Danhmuc;
