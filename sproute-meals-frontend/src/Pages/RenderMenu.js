import React from 'react'
// import SideBar from '../components/menu/sidebar';
import Header from '../components/Menu/Header';
import Menu from '../components/Menu/addMenu';
import MenuItems from '../components/Menu/menuItems';
import SideBar from '../components/order/Orders/SideBar';
import AllMenu from '../components/Menu/AllMenu';

function RenderMenu() {
  return (
    // <div className="">
    // <div className=''><SideBar/>
    // <div className=''><Header/>
    // <div className=''><Menu/>
    // <div className=''><MenuItems/></div>
    // </div>
    // </div>
    // </div>
    // </div>
    <div className='flex'>
      <SideBar/>
      <AllMenu/>
    </div>
  )
}

export default RenderMenu 