import React from 'react'
import { Tabs } from 'antd'
import Detail from './Detail'
import AppFromMenu from '../From/AppFromMenu'
function Profile() {
  const user =JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <Tabs>
        <Tabs.TabPane tab="Profile" key="1">
          {user.role === "common" && <AppFromMenu />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Detail" key="2">
          <Detail />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Profile