import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { GetUserDetail } from '../../apicalls/OnShow'

function Detail() {
    const [ userDetail, setDetail ] = useState([])

    const getData = async () => {
        const user = JSON.parse(localStorage.getItem("user"))
        if(user.role === "user")
        {
            const response = await GetUserDetail(user.id)
            if(response.success)
            {
                setDetail(response.data)
            }
        }
    }
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date'
        },
        {
            title: 'Time',
            dataIndex: 'slot'
        },
        {
            title: 'User',
            dataIndex: 'userName'
        },
        {
            title: 'Booked At',
            dataIndex: 'bookeOn'
        },
    ]

    useEffect(() => {
        getData()
    },[])
  return (
    <div>
        <Table columns={columns} dataSource={userDetail || []} />
    </div>
  )
}

export default Detail