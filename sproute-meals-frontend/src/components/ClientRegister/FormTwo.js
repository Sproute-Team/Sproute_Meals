import React from 'react'
import './styles/form.css'
function FormTwo() {
  return (
    <div className="form">
    <form>                
        <label className='pt-4'>Restaurant Type(Restaurants,pub,hotel)</label>
            <input type="text" placeholder="Restaurant Name"  className='inputstyle'/>
            <input type="text" placeholder="Restaurant Complete Name"  className='inputstyle'/>
        <label className=''>Opening Hours</label>
        <div className="float flex">
                <input type="text" placeholder="Owner's Name" id="left" className='inputstyle' />
                <input type="email" name="email" id="right" placeholder="Restaurant's Owner's Email"  className='inputstyle' />
        </div>
        <label className='pt-4'>Upload Images(pictures or logo)</label>
        <input type="file" className="inputstyle bg-white text-center" />   
    </form>
</div>
  )
}

export default FormTwo