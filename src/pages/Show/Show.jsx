import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ShowLoader } from '../../redux/loaderSlice'
import { GetStoreId } from '../../apicalls/Stores'
import { message } from 'antd'
import moment from 'moment'


function Show() {
    const navigate = useNavigate()
    const [date = "", setDate] = useState("")
    const [store, setStore] = useState(null)
    const [selectedSlot = "", setSelectedSlot]  = useState("")
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
        const day = moment(date).format('dddd')
        var dayOfweek
        if(day === "Monday")
        {
            dayOfweek = "月"
        }
        else if(day === "Tuesday")
        {
            dayOfweek = "火"
        }
        else if(day === "Wednesday")
        {
            dayOfweek = "水"
        }
        else if(day === "Thursday")
        {
            dayOfweek = "木"
        }
        else if(day === "Friday")
        {
            dayOfweek = "金"
        }
        else if(day === "Saturday")
        {
            dayOfweek = "土"
        }
        else if(day === "Sunday")
        {
            dayOfweek = "日"
        }
        if(!store.days.includes(dayOfweek))
        {
            return <h3 className='text-red-500 font-medium'>{moment(date).format("YYYY-MM-DD")}（{dayOfweek}）の出勤予定はございません。</h3>
        }else
        {
            let startTime = moment(store.startime, "HH:mm")
            let endTime = moment(store.endtime, "HH:mm")
            let slotDuration = 60
            let slots = []
            while(startTime < endTime) {
                slots.push(startTime.format("HH:mm"))
                startTime.add(slotDuration, "minutes")
            }
           return <>
             {slots.map((slot) => {
                return (
                    <span className='text-red-500 p-1 cursor-pointer' onClick={() => setSelectedSlot(slot)}
                    style={{
                        border : selectedSlot === slot ? "2px solid green" : "1px solid gray"
                    }}>{slot} - {moment(slot, "HH:mm A").add(slotDuration, "minutes").format("HH:mm A")}</span>
                )
             })}
           </>
        }
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
            <div className='flex flex-col gap-1 bg-white p-1 border-b-2 border-gray-300'>
                    <div className='flex justify-between'>
                        <h4>
                            <b>
                                Days:
                            </b>
                        </h4>
                        <h4 className='text-gray-700 font-medium text-2xl'>{store.days.join(',')}</h4>
                    </div>
                </div>
            <div className='mt-4 flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <h4>
                        <b>
                            Date:
                        </b>
                    </h4>
                    <input className='border border-black' 
                    type='date' 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    min={moment().format("YYYY-MM-DD")}
                     />
                    <button className='border border-blue-400 text-white bg-blue-500 rounded-full px-4 py-2'>検索</button>
                </div>
                <div className='mt-4 flex gap-2'>
                {date && getSlotsData()}
                </div>
                {selectedSlot && 
                <div className='flex justify-end gap-2'>
                    <button className='bg-green-500 p-1 text-white px-2 py-2 rounded-full'>詳細</button>
                    <button className='bg-red-500 p-1 text-white px-2 py-2 rounded-full'
                    onClick={() => navigate("/")}>戻る</button>
                </div>}
            </div>
        </div>
        )
    )
}

export default Show