import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <section className='mt-16 px-2 py-2 border border-t-2 border-green-500 bg-green-500  rounde-full'>
      <div className='text-center text-lg font-medium text-white'>Apply Reservation</div>
      <div className='flex justify-center'>
        <input className='border border-gray-500' placeholder='search' />
        <button className='ml-1 border border-gray-500 bg-gray-500 rounded-full text-white' onClick={() => navigate("/apply-menu")}>検索</button>
      </div>
    </section>
  )
}

export default Home