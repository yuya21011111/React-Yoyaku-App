import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ShowLoader } from '../../redux/loaderSlice'
import { GetStoreId } from '../../apicalls/Stores'
import { message } from 'antd'

function Show() {
    const [store, setStore] = useState(null)
    const { id } = useParams()
    const dispatch = useDispatch()

    const getData = async () => {
        try {
            dispatch(ShowLoader(true))
            const response = await GetStoreId(id)
            if(response.success)
            {
                setStore(response.data)
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
    },[id])
  return (
   store && ( <div className='mt-4 bg-white p-8'>
        <h1 className='text-green-500 text-2xl'>
            {store.firstName} {store.lastName}
        </h1>
    </div>
  )
  )
}

export default Show