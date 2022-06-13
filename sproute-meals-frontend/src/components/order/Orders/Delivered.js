import React from 'react'
import DeliveryBlog from '../../images/deliverNow.png'
import { Bounce } from "react-awesome-reveal";

function Delivered() {
  return (
    <div className='block m-auto'>
            {/* <div className='bg-white w-[30vw] h-[15vh] place-items-center justify-center border-2 border-solid border-[rgba(0,0,0,0.1] rounded-[12px] flex flex-col '>
                <span className='font-bold text-center text-xl'>Delivered</span>
                <p className='text-center'>1200</p>
            </div>
            <div className='bg-white w-80 h-[15vh] place-items-center justify-center border-2 border-solid border-[rgba(0,0,0,0.1]  flex flex-col '>
                <span className='font-bold text-center text-xl'>Delivered</span>
                <p className='text-center'>1200</p>
            </div>
            <div className='bg-white w-80 h-[15vh] place-items-center justify-center border-2 border-solid border-[rgba(0,0,0,0.1]  flex flex-col '>
                <span className='font-bold text-center text-xl'>Delivered</span>
                <p className='text-center'>1200</p>
            </div>
            <div className='bg-white w-80 h-[15vh] place-items-center justify-center border-2 border-solid border-[rgba(0,0,0,0.1]  flex flex-col '>
                <span className='font-bold text-center text-xl'>Delivered</span>
                <p className='text-center'>1200</p>
            </div> */}
            <div className='bg-[#FA4B0C] m-auto rounded-xl h-[45vh] w-[28vw]'>
            <div className='flex place-items-center m-auto justify-center rounded-full'>
                <Bounce>
               <img src={DeliveryBlog} alt="" className='w-[18em] h-[10em] p-[2em]' />
               </Bounce>
            </div>
            <div className='text-[12px] mb-4 px-10 text-center'>
            <span className='text-white'>Welcome to Sproute Meals! We're so excited to have you as part of our team. We're glad you've chosen us, and we want to show our appreciation by giving you a special incentive. We're delighted to have you as our customer.</span>
            </div>
            <div className='m-auto flex justify-center'>
            <button className='p-4 px-10 border-white rounded-xl text-[#FA4b0c] bg-white hover:bg-transparent hover:text-[white]  duration-700 border-2 border-solid'>Start Delivering Now</button>
            </div>
            </div>
        </div>
  )
}

export default Delivered 