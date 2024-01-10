import React from 'react'
import { Tabs } from 'antd'
import Detail from './Detail'
import AppFromMenu from '../From/AppFromMenu'
import moment from 'moment'
function Profile() {
  const user =JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <Tabs>
        <Tabs.TabPane tab="Profile" key="1">
          {user.role === "common" && <AppFromMenu />}
          {user.role !== "common" && 
          <div className='my-1 bg-white p-4 flex flex-col gap-1'>
            <div className='flex gap-2'>
              <h4 className='text-lg font-medium'>
                Name: {user.name} 
              </h4>
            </div>
            <div className='flex gap-2'>
              <h4 className='text-lg font-medium'>
                Email: {user.email} 
              </h4>
            </div>
            <div className='flex gap-2'>
              <h4 className='text-lg font-medium'>
                created On: {moment(user?.createdAt).format("YYYY-MM-DD hh:mm A")} 
              </h4>
            </div>
          </div>}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Detail" key="2">
          <Detail />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Profile