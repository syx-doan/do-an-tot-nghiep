import React from 'react'

function Heading({children}) {
  return (
    <div className='heading d_flex'>
    <div className='heading-left row1  f_flex'>
      <h2>{children}</h2>
    </div>
  </div>
  )
}

export default Heading