import React from 'react'
import {FaSearch,FaBell} from 'react-icons/fa';
import './styles.css';
function ClientHeader() {
  return (
    <div className="client-header justify-between flex pt-3 pr-5 w-[85vw] h-16 bg-white">
         <h1 className="font-bold pl-5 text-2xl desi">Clients</h1>
            <div className="flex gap-4">
                <div className="sach"><FaSearch/></div>
                <div className="border-r-2 pr-2 h-6 border-black border-solid md:w-10 bell"><FaBell/></div>
                <span class="heading">Manzi Cedric</span>
                <div className="rounded-full flex place-items-center -translate-y-2 justify-center w-12 h-10">
                    <img className="h-full w-full rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkNM-Jpk_jOoiMPxd9RMXmPPjf7mXI0Mxc-E5i95YX8sP6whkwwy_ZX_6-7x_tEujLQY&usqp=CAU" alt="" />
                </div>
            </div>
    </div>
  )
}

export default ClientHeader