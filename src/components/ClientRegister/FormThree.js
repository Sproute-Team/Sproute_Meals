import React from 'react'
import './styles/form.css'
function FormThree() {
  return (
    <div className="form">
        <div className="flex pt-2 ">
            <button className="btn bg-[#FA4B0C] text-white  rounded-xl">Drink</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C]   rounded-xl">Starter</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C]  rounded-xl">Appetizer</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C]   rounded-xl">Desert</button>
            <button className="btn border-2 border-solid border-[#FA4B0C] text-[#FA4B0C]   rounded-xl">Main</button>
        </div>
        <form>
        <label>Contacts number @ Restaurant</label>
                <input type="text" name="restaurantContact" id="" placeholder="+250  Mobile number"  className='inputstyle' />                                
        <label>Restaurant's Owner's Details</label>
                <input type="number" name="ownerContact" id="" placeholder="+250  Mobile number"  className='inputstyle' />
        <label>Contacts number @ Restaurant</label>
                <input type="text" name="restaurantContact" id="" placeholder="+250  Mobile number"  className='inputstyle' />                                
        <label>Restaurant's Owner's Details</label>
                <input type="text" name="ownerContact" id="" placeholder="+250  Mobile number"  className='inputstyle' />
        </form>
    </div>
  )
}

export default FormThree