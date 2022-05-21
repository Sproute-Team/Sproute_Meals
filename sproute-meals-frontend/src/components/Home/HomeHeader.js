import React from 'react'
import {FaSearch,FaBell} from 'react-icons/fa'
function HomeHeader() {
  return (
    <div className="HomeHeader justify-around flex pt-3 pr-5 w-[100vw] h-[3vw]">
         <h1 className="font-bold pl-5 text-2xl">Clients</h1>
         <div className="flex gap-4">
            <ul className="list-none flex gap-6 text-white">
                <li className="border-b-4 border-[#FA4B0C] border-solid">Home</li>
                <li>Clients</li>
                <li>Overview</li>
            </ul>
         </div>
    </div>
  )
}

export default HomeHeader