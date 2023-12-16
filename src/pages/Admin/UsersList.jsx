import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ShowLoader } from '../../redux/loaderSlice'
import { message } from 'antd'
import { Table } from 'antd'
import { GetAllusers } from '../../apicalls/user'

function UsersList() {
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      dispatch(ShowLoader(true))
      const response = await GetAllusers()
      dispatch(ShowLoader(false))
      if(response.success)
      {
        setUsers(response.data)
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
      title: "ID",
      dataIndex: "id"
    },
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (role) => role.toUpperCase()
    },
  ]
  return (
    <div>
      <Table columns={columns} dataSource={users} />
    </div>
  )
}

export default UsersList