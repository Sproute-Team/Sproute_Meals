import React from 'react'
import { FaSearch, FaPlus, FaEllipsisH } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function ClientAdd() {
  return (
    <div className='flex p-5 mt-5 bg-white w-[80vw] m-auto justify-between'>
      <div className='flex gap-4'>
        <span className='border-b-4 border-solid border-[#FA4B0C] font-semibold text-[12px]'>Overview</span><i><FaSearch /></i>
        <span className='font-semibold text-[12px]'>List View</span><i><FaEllipsisH /></i>
      </div>
      <div className='flex place-items-center justify-center'>
        <Link to='/addClient'><button className='btn p-4 text-white text-[12px] font-bold rounded-xl place-items-center flex justify-center gap-2 bg-[#FA4B0C]'>Add Client<i><FaPlus className='text-[12px]' /></i></button></Link>
      </div>
    </div>
  )
}

export default ClientAdd