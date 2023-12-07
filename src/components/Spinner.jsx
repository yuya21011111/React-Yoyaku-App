import React from 'react'
import { Spin } from 'antd'

function Spinner() {
  return (
   <div className='spinner fixed inset-0 flex justify-center items-center'>
    <Spin size='large'></Spin>
   </div>
  )
}

export default Spinner