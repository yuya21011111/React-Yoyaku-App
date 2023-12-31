import React from 'react'
import { Tabs } from 'antd'
import Detail from './Detail'
function Profile() {
  return (
    <div>
      <Tabs>
        <Tabs.TabPane tab="Profile" key="1"></Tabs.TabPane>
        <Tabs.TabPane tab="Detail" key="2">
          <Detail />
        </Tabs.TabPane>
        <Tabs.TabPane tab="My Appointpoints" key="3"></Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Profile