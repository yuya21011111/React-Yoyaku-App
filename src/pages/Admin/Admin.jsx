import React from 'react'
import { Table, Tabs } from 'antd'
import UsersList from './UsersList'
import StoresList from './StoresList'

function Admin() {
  return (
    <Tabs className='bg-white p-4'>
        <Tabs.TabPane tab="User" key="1">
           <UsersList />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Stores" key="2">
          <StoresList />
        </Tabs.TabPane>
    </Tabs>
  )
}

export default Admin