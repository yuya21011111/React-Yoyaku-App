import { Table, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { GetAdminCommon, GetUserDetail, updateUser } from '../../apicalls/OnShow'
import { useDispatch } from 'react-redux'
import { ShowLoader } from '../../redux/loaderSlice'

function Detail() {
    const [ userDetail, setDetail ] = useState([])
    const dispatch = useDispatch()

    const onUpdate = async (id, status) => {
      try {
        dispatch(ShowLoader(true))
        console.log("update")
        const response = await updateUser(id, status)
        if(response.success)
        {
            message.success(response.message)
            getData()
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
        else if(user.role === "common" || user.role === "admin")
        {
            const response = await GetAdminCommon(user.id)
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
            title: 'FriendName',
            dataIndex: 'storeName'
        },
        {
            title: 'User',
            dataIndex: 'userName'
        },
        {
            title: 'Booked At',
            dataIndex: 'bookeOn'
        },
        {
            title: "Problem",
            dataIndex: "problem"
        },
        {
            title: "Status",
            dataIndex: "status"
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, record) => {
                const user = JSON.parse(localStorage.getItem("user"))
                if(record.status === "pending" && user.role === "common")
                // if(user.role === "user" || user.role === "admin")
                {
                    return <div>
                          <span  className='mr-2 shadow-lg px-2 py-1 bg-gray-400 text-sm text-white font-medium rounded hover:bg-gray-500 hover:shadow-sm hover:translate-y-0.5 transform transition cursor-pointer'  onClick={() => onUpdate(record.id, "cancelled")}>
                            キャンセル
                          </span>
                          <span  className='shadow-lg px-2 py-1 bg-red-400 text-sm text-white font-medium rounded hover:bg-gray-500 hover:shadow-sm hover:translate-y-0.5 transform transition cursor-pointer'  onClick={() => onUpdate(record.id, "approvend")} >
                            承認
                          </span>
                    </div>
                }
            }
        }
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