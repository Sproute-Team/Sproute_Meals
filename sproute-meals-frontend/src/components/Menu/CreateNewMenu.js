import React from 'react';
import {FaPlus} from 'react-icons/fa';
function CreateNewMenu() {
  const NewMenuRestaurants = [
    {name: 'Restaurants',text:'New'},{name: 'Hotels/Motels',text:"New"},{name: 'Resto/Bar',text:"New"},{name: 'Resto/Bar',text:"New"},
  ]
  return (
    <div className='bg-white rounded-xl border-2 h-[14vh] w-[40vw] m-2'>
    <div className='flex justify-between text-[12px] px-10 py-5'>
    <span className=' text-xl font-bold'>Add Item</span>
        <span>Today</span>
        <span className="text-[#FA4B0C] font-bold">View All</span>
    </div>
    <p className="text-[rgba(0,0,0,0.4)] text-[12px] font-bold pb-5 px-10 flex row-auto">Create New Menu Item <span className='plus'><FaPlus></FaPlus></span></p>
    {NewMenuRestaurants.map((menu, i) =>(
    <div key={i} className='flex border-2 border-solid w-full  border-[#00000015] justify-around py-3'>
    <input type="radio" className='h-4 w-4' />
    <span   className="font-semibold text-[14px] text-black">{menu.name}</span>
    <button className="btn text-[12px] bg-[#FA4B0C] border-2 border-solid border-[#FA4B0C] text-[white] p-[0.5em] px-5 mr-2 rounded-xl">{menu.text}</button>
    </div>
    ))}
</div>
  )
}
export default CreateNewMenu;
