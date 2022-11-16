import { height } from "@mui/system"
import React from "react"

const Annocument = () => {
 
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={{ width: "30%", height: "340px"}}>
            <img src='./images/banner-1.png' />
          </div>
          <div className='img' style={{width: "69%", height:"340px"}}>
            <img src='./images/banner-2.png'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
