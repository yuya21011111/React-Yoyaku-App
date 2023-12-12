import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ShowLoader } from '../../redux/loaderSlice'
import { message } from 'antd'
import { GetAllStores } from '../../apicalls/Stores'
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
      dataIndex: "status"
    },
  ]
  return (
    <div>
      <Table columns={columns} dataSource={stores} />
    </div>
  )
}

export default StoresList