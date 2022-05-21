import React from 'react';
import './addmenu.css';
function Menu() {
  return (
    <div className="flex pt-2 pl-5 gap-4">
            <div className='the_menu'>
            <h1>Menu</h1>
            <p>25th May 2022</p>
            <p>09:41 P.M</p>
            </div>
            <div className='buttons'>
            <button className="btn bg-[#FA4B0C] text-white p-3 px-8 rounded-xl">Drink</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-3 px-8 rounded-xl">Starter</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-3 px-8 rounded-xl">Appetizer</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-3 px-8 rounded-xl">Desert</button>
            <button className=" border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-3 px-8 rounded-xl">Main</button>
            </div>
            
        </div>
  )
}
export default Menu;