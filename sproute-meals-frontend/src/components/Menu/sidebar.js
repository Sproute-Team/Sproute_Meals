import React from 'react';
import Icon from './Icon';
import './sidebar.css';
function SideBar() {
  return (
    <div className='sidebar bg-[#020C18]  w-72 h-screen pl-5'>
        <div className='flex pt-5'>
            <span className='text-[#FA4B0C] text-2xl font-bold'>SPROUTE <span className='text-white'>Meals</span> </span>
        </div>
        <Icon/>
    </div>
  )
}
export default SideBar;