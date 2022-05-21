import React from 'react'
import { FaPlaneDeparture, FaSearchPlus } from 'react-icons/fa'
import HomeHeader from './HomeHeader'

function HomeSection() {
  return (
      <>
    <div className="home-section w-[100vw] h-[100vh]">
        <HomeHeader/>
        <div className='flex flex-col place-items-center h-[20vw]  text-white justify-center'>
            <span className='text-5xl font-semibold p-5'>Welcome at Our Sproute Meals</span>
            <button className='btn text-white text-[16px] bg-[#FA4B0C] px-15'>Register Now</button>
        </div>
    </div>
    <div className='w-[100vw] h-[100vh] bg-[#f1efef]'>
    <div className="flex flex-col">
        <h1 className="text-center m-auto w-fit text-2xl font-bold mt-5">Get Started</h1>
        <p className="m-auto w-fit text-[#00000089]">For free and get more revenues! For free and get more revenues! For free and get more revenues! </p>
    </div>
            <div className="flex flex-row mt-10">
                <div className="grid grid-cols-2">
                <div className=" bg-white rounded-md mx-10 m-auto my-5 ">
                        <svg className="m-auto flex justify-center place-items-center my-6" width="100" height="100" viewBox="0 0 176 157" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.7353 4.64764C60.8991 -6.27624 84.4205 5.89225 105.449 14.3408C120.032 20.1993 127.787 33.2234 138.521 44.3355C152.019 58.3084 173.241 66.9819 175.274 86.6216C177.723 110.273 171.289 139.931 149.739 152.678C128.554 165.209 105.71 144.787 82.1187 141.723C59.3723 138.769 32.2721 150.509 16.0848 135.32C-1.24572 119.058 -1.55978 91.5055 2.81858 67.3145C7.20692 43.0684 17.1318 16.3146 39.7353 4.64764Z" fill="#FA4B0C" fill-opacity="0.8"/>
<FaPlaneDeparture className="text-xl text-black "/>
</svg>
                        <p className="font-semibold p-4 text-center m-auto">Start receiving orders</p>
                    </div>
                    <div className=" bg-white rounded-md mx-10 my-5 ">
                        {/* <img src={Component2} className="w-1/2  m-auto" alt="" /> */}
                        <p className="font-bold text-xl">Create your status</p>
                    </div>
                    <div className=" bg-white rounded-md mx-10 m-auto my-5 ">
                         {/* <img src={Component3} alt="" className="w-1/2 m-auto" />  */}
                        <p className="font-bold text-xl">Start Receiving orders</p>
                    </div>
                    <div className=" bg-white rounded-md mx-10 m-auto my-5 ">
                        {/* <img src={Component4} alt="" className="w-1/2 m-auto" /> */}
                        {/* <div className='flex justify-center bg-black'> */}
                        <svg className="m-auto flex justify-center place-items-center my-6" width="100" height="100" viewBox="0 0 176 157" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39.7353 4.64764C60.8991 -6.27624 84.4205 5.89225 105.449 14.3408C120.032 20.1993 127.787 33.2234 138.521 44.3355C152.019 58.3084 173.241 66.9819 175.274 86.6216C177.723 110.273 171.289 139.931 149.739 152.678C128.554 165.209 105.71 144.787 82.1187 141.723C59.3723 138.769 32.2721 150.509 16.0848 135.32C-1.24572 119.058 -1.55978 91.5055 2.81858 67.3145C7.20692 43.0684 17.1318 16.3146 39.7353 4.64764Z" fill="#FA4B0C" fill-opacity="0.8"/>
<FaPlaneDeparture className="text-xl text-black "/>
</svg>
                        <p className="font-semibold p-4 text-center m-auto">Start receiving orders</p>
                    </div>
                </div>
                <div className="w-1/2 mt-10">
                    <p>Britain is famous all over the world for its gardens, dogs, villages, buses, cars, private schools, the Queen, sports like football and cricket, Parliament. However, not so much has been written about the wonderful food that can be found in Britain. Read two texts about food and say what the English eat and what the British food is like. Is there any difference between the English and the British food? The texts are for beginners and for the upper-intermediate level.</p>
                    <button className="bg-[#FA4B0C] ml-2 mt-10 rounded py-3 text-white font-bold">Get Started</button>
                </div>
            </div>
    </div>
    </>
  )
}

export default HomeSection