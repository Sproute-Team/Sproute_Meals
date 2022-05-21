import React from 'react'
import SideBar from '../order/Orders/SideBar'
import HomeBar from './HomeBar'

function DashBoard() {
  return (
    <div className="dashboard bg-[#F7F8FC] flex">
        <SideBar />
        <HomeBar/>
    </div>
  )
}

export default DashBoard 