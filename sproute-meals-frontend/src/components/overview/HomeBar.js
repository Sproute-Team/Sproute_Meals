import React from 'react'
// import { Chart } from 'react-chartjs-2'
import ChartSketch from './ChartSketch'
import ClientSimple from './ClientSimple'
import DeliveSide from './DeliveSide'
import HeaderOverview from './HeaderOverview'
import Places from './Places'
import '../../App.css'
import CreateNewDash from './CreateNewDash'
function HomeBar() {
  return (
      <>
      <div className="block w-[85vw] overflow-y-scroll h-[100vh]">
        <HeaderOverview/>
        <div className="flex">
            <ClientSimple/>
        </div>
        <div className="flex">
        <div className="ml-5 pt-4 px-2 rounded-l-xl bg-white w-[60vw] h-[65vh]">
        <div className="m-auto md:flex justify-between w-[50vw]">
            <div>
            <span className="font-bold  text-black text-2xl">Today</span>
            <p className="font-bold text-sm text-[#0000003a]">as of 25th May 2022</p>
            </div>
            <div className="flex gap-2">
            <div className='flex pt-6'>
                <svg width="8" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/800/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" strokeWidth="4"/></svg>
                <span className="text-[#FA4B0C] text-sm -translate-y-2">Table 1</span>
                <svg width="8" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/800/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" strokeWidth="4"/></svg>
            </div>
            <div className='flex  pt-6'>
                <svg width="8" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/800/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" strokeWidth="4"/></svg>
                <span className="text-[#FA4B0C] text-sm -translate-y-2">Table 1</span>
                <svg width="8" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/800/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" strokeWidth="4"/></svg>
            </div>
            <div className='flex pt-6'>
                <svg width="8" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/800/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" strokeWidth="4"/></svg>
                <span className="text-[#FA4B0C] text-sm -translate-y-2">Table 1</span>
                <svg width="8" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/800/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" strokeWidth="4"/></svg>
            </div>
            </div>
        </div>
        <div className="w-[50vw]  m-auto h-[50vh]">
        <ChartSketch/>
        </div>
        </div>
        <DeliveSide/>
        </div>
        <div className="flex">
        <div className='places m-5'>
            <Places/>
            <Places/>
            <Places/>
            <Places/>
        </div>
        <CreateNewDash/>
        </div>
        </div>
    </>
  )
}

export default HomeBar 