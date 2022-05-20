import React from 'react';
import Icon from './Icon'
function SideBar() {
  return (
    <div className='sidebar bg-[rgba(32,30,72,0.98)]  w-[15vw] h-screen'>
        <div className='flex font-sans p-3 pl-5'>
            <span className='text-[#FA4B0C] text-2xl font-bold'>SPROUTE <span className='text-white'>Meals</span> </span>
        </div>
        <Icon/>
    </div>
  )
}

export default SideBar