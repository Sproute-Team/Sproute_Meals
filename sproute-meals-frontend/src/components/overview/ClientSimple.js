import React from 'react'

function ClientSimple() {
  return (
      <>
    <div className="h-24 rounded-[20px] duration-500 origin-top-right text-white hover:text-[#FA4B0C] hover:cursor-pointer hover:bg-white hover:border-[#FA4B0C] hover:border-2 hover:border-solid m-5 w-48 bg-[#FA4B0C] flex flex-col place-items-center justify-center">
        <span className='text-xl font-semibold'>Clients</span><span className='text-sm'>350</span>
    </div>
    <div className="h-24 rounded-[20px] duration-500 origin-top-right text-[#FA4B0C] hover:text-[white] hover:cursor-pointer hover:bg-[#FA4B0C] border-[#FA4B0C] border-2 border-solid m-5 w-48 bg-[white] flex flex-col place-items-center justify-center">
        <span className='text-xl  font-semibold'>Revenue(Frw)</span><span className='text-sm'>500050</span>
    </div>
    <div className="h-24 rounded-[20px] duration-500 origin-top-right text-[#FA4B0C] hover:text-[white] hover:cursor-pointer hover:bg-[#FA4B0C] border-[#FA4B0C] border-2 border-solid m-5 w-48 bg-[white] flex flex-col place-items-center justify-center">
        <span className='text-xl  font-semibold'>Orders</span><span className='text-sm'>460</span>
    </div>
    <div className="h-24 rounded-[20px] duration-500 origin-top-right text-[#FA4B0C] hover:text-[white] hover:cursor-pointer hover:bg-[#FA4B0C] border-[#FA4B0C] border-2 border-solid m-5 w-48 bg-[white] flex flex-col place-items-center justify-center">
        <span className='text-xl  font-semibold'>Deliveries</span><span className='text-sm'>35</span>
    </div>
    </>
  )
}

export default ClientSimple