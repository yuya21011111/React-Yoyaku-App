import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ShowLoader } from '../../redux/loaderSlice'
import { message } from 'antd'
import { GetAllStores, UpdateStore } from '../../apicalls/Stores'
import { Table } from 'antd'

function StoresList() {
  const [stores, setStores] = useState([])
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      dispatch(ShowLoader(true))
      const response = await GetAllStores()
      dispatch(ShowLoader(false))
      if(response.success)
      {
        setStores(response.data)
      }else{
        throw new Error(response.message)
      }
    } catch (error) {
      dispatch(ShowLoader(false))
      message.error(error.message)
    }

  }

  const changeStatus = async (payload) => {
    try {
      dispatch(ShowLoader(true))
      console.log(1)
      const response = await UpdateStore(payload)
      dispatch(ShowLoader(false))
      if(response.success)
      {
        getData()
      }else
      {
        throw new Error(response.message)
      }

    } catch (error) {
      message.error(error.message)
      dispatch(ShowLoader(false))
    }
  }

  useEffect(() => {
    getData()
  },[])

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName"
    },
    {
      title: "Last Name",
      dataIndex: "lastName"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Phone",
      dataIndex: "phone"
    },
    {
      title: "Address",
      dataIndex: "address"
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => {
        return text.toUpperCase()
      }
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => {
        if(record.status === "pending")
        {
          return (<div className='flex' >
            <span className='border-b-2 mr-4 hover:bg-blue-500' onClick={() => changeStatus({
              ...record,
              status: "rejected",
            })}>Reject</span>
             <span className='border-b-2 hover:bg-blue-500'  onClick={() => changeStatus({
              ...record,
              status: "approved",
            })}>Appprove</span>
          </div>
          )
        }
        if(record.status === "approved")
        {
          return (
            <div className='flex'>
              <span className='border-b-2 hover:bg-blue-500'  onClick={() => changeStatus({
              ...record,
              status: "blocked",
            })}>Block</span>
            </div>
          )
        }
        if(record.status === "blocked")
        {
          return (
            <div className='flex'>
              <span className='border-b-2 hover:bg-blue-500'  onClick={() => changeStatus({
              ...record,
              status: "approved",
            })}>
                Unblock
              </span>
            </div>
          )
        }
      }
    }
  ]
  return (
    <div>
      <Table columns={columns} dataSource={stores} />
    </div>
  )
}

export default StoresList