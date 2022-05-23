import React from 'react'

function Menu() {
  return (
    <div className="flex pt-2 pl-5 gap-4">
            <button className="btn bg-black text-white p-4 px-10 rounded-xl">Order</button>
            <button className="btn bg-[#FA4B0C] text-white p-4 px-14 rounded-xl">Drink</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-4 px-14 rounded-xl">Starter</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-4 px-14 rounded-xl">Appetizer</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-4 px-14 rounded-xl">Desert</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-4 px-14 rounded-xl">Main</button>
    </div>
  )
}

export default Menu 