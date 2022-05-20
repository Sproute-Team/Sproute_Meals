import React from 'react'
import HomeOrder from '../components/order/Orders/HomeOrder';
import SideBar from '../components/order/Orders/SideBar';

function RenderOrder() {
  return (
    <div className="App flex">
    <SideBar/>
    <HomeOrder/>
  </div>
  )
}
export default RenderOrder