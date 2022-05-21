import React from 'react'
import {FaSearch,FaBell} from 'react-icons/fa';
function Header() {
  return (
    <div className=" text-black bg-white p-3 flex justify-between">
            <h1 className="font-bold text-2xl">Orders</h1>
            <div className="flex gap-4">
                <FaSearch/>
                <div className="border-r-2 pr-2 h-6 border-black border-solid "><FaBell/></div>
                <span>Manzi Cedrick</span>
                <div className="rounded-full w-10 h-10  ">
                    <img className="h-full w-full rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkNM-Jpk_jOoiMPxd9RMXmPPjf7mXI0Mxc-E5i95YX8sP6whkwwy_ZX_6-7x_tEujLQY&usqp=CAU" alt="" />
                </div>
            </div>
    </div>
  )
}
export default Header;