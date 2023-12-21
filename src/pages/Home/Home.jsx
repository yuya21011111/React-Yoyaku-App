import { Row, message, Col } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ShowLoader } from '../../redux/loaderSlice'
import { GetAllStores } from '../../apicalls/Stores'
import 'antd/dist/antd.css'

function Home() {
  const [stores, setStores] = useState([])
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      dispatch(ShowLoader(true))
      const response = await GetAllStores()
      if(response.success)
      {
        setStores(response.data)
      }else
      {
        message.error(response.message)
      }
      dispatch(ShowLoader(false))
    } catch (error) {
      message.error(error.message)
      dispatch(ShowLoader(false))
    }
  }
  useEffect(() => {
    getData()
  },[])
  const navigate = useNavigate()
  return (
    <>
    <section className='mt-16 px-2 py-2 border border-t-2 border-green-500 bg-green-500  rounde-full'>
      <div className='text-center text-lg font-medium text-white'>Apply Reservation</div>
      <div className='flex justify-center'>
        <input className='border border-gray-500' placeholder='search' />
        <button className='ml-1 border border-gray-500 bg-gray-500 rounded-full text-white' onClick={() => navigate("/apply-menu")}>検索</button>
      </div>
    </section>
    <section>
      <Row
      gutter={[16,16]}
      className='mt-8'>
      {stores.map((store) => {
        return (
          <Col span={8}>
            <div className='flex flex-col gap-1 bg-white p-1 cursor-pointer' onClick={() => navigate(`/show/${store.id}`)}>
              <div className='flex justify-between'> 
              <h4>
                <b>
                  Name:
                </b>
              </h4>
                <h4 className='text-gray-700 font-medium text-2xl'>{store.firstName} {store.lastName}</h4>
              </div>
            </div>
            <div className='flex flex-col gap-1 bg-white p-1'>
              <div className='flex justify-between'> 
              <h4>
                <b>
                  Gender:
                </b>
              </h4>
                <h4 className='text-gray-700 font-medium text-2xl'>{store.gender}</h4>
              </div>
            </div>
            <div className='flex flex-col gap-1 bg-white p-1'>
              <div className='flex justify-between'> 
              <h4>
                <b>
                  Email:
                </b>
              </h4>
                <h4 className='text-gray-700 font-medium text-2xl'>{store.email}</h4>
              </div>
              <div className='flex flex-col gap-1 bg-white p-1'>
              <div className='flex justify-between'> 
              <h4>
                <b>
                  Phone:
                </b>
              </h4>
                <h4 className='text-gray-700 font-medium text-2xl'>{store.phone}</h4>
              </div>
            </div>
            </div>
          </Col>
        )
      })}
      </Row>
    </section>
    </>
  )
}

export default Home