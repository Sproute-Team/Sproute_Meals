import React from 'react'
import { FaCartPlus, FaFacebookMessenger, FaHamburger, FaSearch, FaWhatsapp, FaYoutubeSquare } from 'react-icons/fa'

function HomeNew() {
  return (
    <>
    <div className={'flex p-5 px-15 bg-white justify-between'}>
        <div>
            <span>Sproute</span>
            <span className={'text-[#FA4B0c]'}>Meals</span>
        </div>
        <div className='flex gap-4'>
            <i><FaSearch/></i>
            <i><FaCartPlus/></i>
            <i><FaHamburger/></i>
        </div>
    </div>
    <div className='flex'>
    <div className="container flex flex-col">
    <div className=' pl-5 bg-white justify-between '>
        <p className='text-[6em] font-semibold'>Good Food</p>
        <p className='text-[4em] font-normal -translate-y-10'>Good Mood</p>
    </div>
    <div className=' pl-5  w-[50vw] justify-between'>
        <p>Sproute Meals is a neighborhood restaurant serving seasonable global cuisine driven by the faire.Sproute Meals is a neighborhood restaurant serving seasonable global cuisine driven by the faire.Sproute Meals is a neighborhood restaurant serving seasonable global cuisine driven by the faire.</p>
        <button className='p-6 mt-10 px-5 bg-[#FA4B0C] rounded-xl text-white'>Explore the Food Menu</button>
    </div>
    <div className='flex gap-4 p-5'>
        <div className='h-14 w-14 rounded-full bg-slate-200 flex justify-center place-items-center drop-shadow-xl'>
            <i><FaFacebookMessenger/></i>
        </div>
        <div className='h-14 w-14 rounded-full bg-slate-200 flex justify-center place-items-center drop-shadow-xl'>
            <i><FaWhatsapp/></i>
        </div>
        <div className='h-14 w-14 rounded-full bg-slate-200 flex justify-center place-items-center drop-shadow-xl'>
            <i><FaYoutubeSquare/></i>
        </div>
    </div>
    </div>
    <div className='w-[60vh] px-10 mx-[3em] rounded-full h-[50vh] bg-[#FA4B0C]'>
        <img src="" alt="" />
    </div>
    </div>
    </>
  )
}

export default HomeNew