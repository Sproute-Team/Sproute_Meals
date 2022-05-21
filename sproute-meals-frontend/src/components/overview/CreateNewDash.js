import React from 'react'

function CreateNewDash() {
  return (
    <div className='bg-white rounded-xl border-2 border-solid border-[#FA4B0C55] w-[25vw] m-5'>
    <span className='px-10 p-5 text-[16px] font-semibold'>Create</span>
    <div className='flex justify-between text-[12px] px-10 py-2'>
        <span>Today</span>
        <span className="text-[#FA4B0C] font-bold">View All</span>
    </div>
    <p className="text-[rgba(0,0,0,0.4)] text-[12px] font-bold pb-5 px-10">Create New</p>
    <div className='flex border-2 border-solid w-full  border-[#00000015] justify-around py-3'>
    <input type="radio" className='h-4 w-4' />
    <span   className="font-semibold text-[14px] text-black">Restaurants</span>
    <button className="btn text-[12px] bg-[#FA4B0C] border-2 border-solid border-[#FA4B0C] text-[white] p-[0.5em] px-5 mr-2 rounded-xl">New</button>
    </div>
    <div className='flex border-2 border-solid w-full  border-[#00000015] justify-around py-3'>
    <input type="radio" className='h-4 w-4' />
    <span className="font-semibold text-[14px] text-black">Restaurants</span>
    <button className="btn text-[12px] bg-[#FA4B0C] border-2 border-solid border-[#FA4B0C] text-[white] p-[0.5em] px-5 mr-2 rounded-xl">New</button>
    </div>
    <div className='flex border-2 border-solid w-full  border-[#00000015] justify-around py-3'>
    <input type="radio" className='h-4 w-4' />
    <span className="font-semibold text-[14px] text-black">Restaurants</span>
    <button className="btn text-[12px] bg-[#FA4B0C] border-2 border-solid border-[#FA4B0C] text-[white] p-[0.5em] px-5 mr-2 rounded-xl">New</button>
    </div>
    <div className='flex border-2 border-solid w-full  border-[#00000015] justify-around py-3'>
    <input type="radio" className='h-4 w-4' />
    <span className="font-semibold text-[14px] text-black">Restaurants</span>
    <button className="btn text-[12px] bg-[#FA4B0C] border-2 border-solid border-[#FA4B0C] text-[white] p-[0.5em] px-5 mr-2 rounded-xl">New</button>
    </div>
</div>
  )
}
export default CreateNewDash