import React from 'react'
// import SideBar from '../components/menu/sidebar';
import Header from '../components/Menu/Header';
import Menu from '../components/Menu/addMenu';
import MenuItems from '../components/Menu/menuItems';
import SideBar from '../components/order/Orders/SideBar';

function RenderMenu() {
  return (
    <div className="RenderMenu">
    <div className='side_menu'><SideBar/>
    <div className='header_side_menu'><Header/>
    <div className='menu_menuItems'><Menu/>
    <div className='items-menu'><MenuItems/></div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default RenderMenu 