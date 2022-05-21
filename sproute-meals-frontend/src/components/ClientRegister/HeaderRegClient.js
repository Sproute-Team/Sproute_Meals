import React from 'react'
import {FaSearch,FaBell} from 'react-icons/fa'
function HeaderRegClient() {
  return (
    <div className="client-header justify-between flex pt-4 pr-5 w-[100vw] h-16 bg-[#F7F8FC]">
         <h1 className=" font-black pl-5 text-[#FA4B0c] text-2xl">SPROUTE<span className="p-2 text-black">Meals</span></h1>
            <div className="flex gap-6">
                <FaSearch/>
                <div className="border-r-2  pr-2 h-6 border-black border-solid "><FaBell/></div>
                <span>Manzi Cedrick</span>
                <div className="rounded-full flex place-items-center -translate-y-2 justify-center w-12 h-10">
                    <img className="h-full w-full rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkNM-Jpk_jOoiMPxd9RMXmPPjf7mXI0Mxc-E5i95YX8sP6whkwwy_ZX_6-7x_tEujLQY&usqp=CAU" alt="" />
                </div>
            </div>
    </div>
  )
}

export default HeaderRegClient