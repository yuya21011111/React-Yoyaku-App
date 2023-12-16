import React, { useEffect, useState } from 'react'
import { Table, Tabs, message } from 'antd'
import UsersList from './UsersList'
import StoresList from './StoresList'
import { useDispatch } from 'react-redux'
import { ShowLoader } from '../../redux/loaderSlice'
import { GetUserById } from '../../apicalls/user'

function Admin() {
  const [isAdmin, setIsAdmin] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"))
  const dispatch = useDispatch()

  const checkIsAdmin = async () => {
    try {
      dispatch(ShowLoader(true))
      console.log("check")
      const response = await GetUserById(user.id)
      dispatch(ShowLoader(false))
      if(response.success && response.data.role === "admin")
      {
        console.log("Admin")
        setIsAdmin(true)
      }else
      {
        throw new Error("あなたは管理者ではありません。")
      }
    } catch (error) {
      dispatch(ShowLoader(false))
      message.error(error.message)
    }

  }

  useEffect(() => {
   checkIsAdmin()
  }, [])
  return (
   isAdmin && <div>
    <Tabs className='bg-white p-4'>
        <Tabs.TabPane tab="User" key="1">
           <UsersList />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Stores" key="2">
          <StoresList />
        </Tabs.TabPane>
    </Tabs>
    </div>
  )
}

export default Admin