import React from 'react';
import { FaChartPie, FaUber } from 'react-icons/fa';
function Icon() {
  return (
      <>    
    <div className='flex text-white hover:text-[#FA4B0C] hover:cursor-pointer gap-4 hover:bg-slate-700 mt-2 p-4 px-10'>
        <FaChartPie className='text-2xl'/><span className='text-xl'>Overview</span>
    </div>
    
    <div className='flex text-white hover:text-[#FA4B0C] hover:cursor-pointer gap-4 hover:bg-slate-700 mt-2 p-4 px-10'>
        <FaChartPie className='text-2xl'/><span className='text-xl'>Clients</span>
    </div>
    <div className='flex text-[#FA4B0C] hover:cursor-pointer gap-4 bg-slate-700 mt-2 p-4 px-10'>
        <FaUber className='text-2xl'/><span className='text-xl'>Menu</span>
    </div>
    <div className='flex text-white hover:text-[#FA4B0C] hover:cursor-pointer gap-4 hover:bg-slate-700 mt-2 p-4 px-10'>
        <FaChartPie className='text-2xl'/><span className='text-xl'>Overview</span>
    </div>
    </>
  )
}
export default Icon;