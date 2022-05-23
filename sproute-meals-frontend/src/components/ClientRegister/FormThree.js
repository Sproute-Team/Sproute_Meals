import React from 'react'
import './styles/form.css'
function FormThree() {
  return (
    <div className="form pt-2">
       <div className="flex pl-3 pb-1 gap-4 ">
            <button className="btn bg-black text-white p-2 px-4 rounded-xl">Order</button>
            <button className="btn bg-[#FA4B0C] text-white p-2 px-4 rounded-xl">Drink</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-2 px-4 rounded-xl">Starter</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-2 px-4 rounded-xl">Appetizer</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-2 px-4 rounded-xl">Desert</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C] p-2 px-4 rounded-xl">Main</button>
    </div>
        <form>
        <label className='label-form'>Contacts number @ Restaurant</label>
                <input type="text" name="restaurantContact" id="" placeholder="+250  Mobile number"  className='inputstyle' />                                
        <label className='label-form'>Restaurant's Owner's Details</label>
                <input type="number" name="ownerContact" id="" placeholder="+250  Mobile number"  className='inputstyle' />
        <label className='label-form'>Contacts number @ Restaurant</label>
                <input type="text" name="restaurantContact" id="" placeholder="+250  Mobile number"  className='inputstyle' />                                
        <label className='label-form'>Restaurant's Owner's Details</label>
                <input type="text" name="ownerContact" id="" placeholder="+250  Mobile number"  className='inputstyle' />
                <input type="submit" value="Create" className='p-2 bg-[#FA4B0C] text-white rounded-xl ml-16 px-10'/>
        </form>
    </div>
  )
}

export default FormThree