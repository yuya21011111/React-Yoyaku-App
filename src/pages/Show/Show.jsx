import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ShowLoader } from '../../redux/loaderSlice'
import { GetStoreId } from '../../apicalls/Stores'
import { message } from 'antd'

function Show() {
    const [date = "", setDate] = useState("")
    const [store, setStore] = useState(null)
    const { id } = useParams()
    const dispatch = useDispatch()

    const getData = async () => {
        try {
            dispatch(ShowLoader(true))
            const response = await GetStoreId(id)
            if (response.success) {
                setStore(response.data)
            } else {
                message.error(response.message)
            }
            dispatch(ShowLoader(false))
        } catch (error) {
            message.error(error.message)
            dispatch(ShowLoader(false))
        }
    }


    const getSlotsData = () => {
        return
    }

    useEffect(() => {
        getData()
    }, [id])
    return (
        store && (<div className='mt-4 bg-white p-8'>
            <h1 className='text-gray-500 text-2xl border-b-2 border-gray-300'>
                <b>{store.firstName} {store.lastName}</b>
            </h1>
            <div className='flex flex-col gap-1 bg-white'>
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
                <div className='flex flex-col gap-1 bg-white p-1 border-b-2 border-gray-300'>
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

            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <h4>
                        <b>
                            Date:
                        </b>
                    </h4>
                    <input className='border border-black' type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                    <button className='border border-blue-400 text-white bg-blue-500 rounded-full px-4 py-2'>検索</button>
                </div>
                {date && getSlotsData()}
            </div>
        </div>
        )
    )
}

export default Show