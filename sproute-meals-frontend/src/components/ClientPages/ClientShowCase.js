import React from 'react'
import {FaPencilAlt, FaHamburger } from 'react-icons/fa'
function ClientShowCase(props) {
    const {clients} = props;
  return (
      clients.map(()=>{
      <>
<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr className="heads">
            <th>Profile</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Orders</th>
            <th>Price Expectations</th>
            <th>Phone</th>
            <th colSpan="2">Controls</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td className="roundd"><img className='rounded-full w-12 pro' src="https://i.pinimg.com/originals/26/8d/88/268d886c389d98db13c59da55c5dc789.jpg" alt="No" /></td>
            <td>Manzi Cedrick</td>
            <td>cedrickmanzi0@gmail.com</td>
            <td>Kigali,Rwanda</td>
            <td>10 Orders</td>
            <td>$800,000-$1000,000</td>
            <td>+250 0780918379</td>
            <td><FaPencilAlt className='text-[#FA4B0C] cursor-pointer'/></td>    
            <td><FaHamburger className='text-[#FA4B0C] cursor-pointer'/></td>        
        </tr>
        {/* <tr>
            <td className="roundd"><img className='rounded-full w-12' src="https://i.pinimg.com/originals/26/8d/88/268d886c389d98db13c59da55c5dc789.jpg" alt="No" /></td>
            <td>Manzi Cedrick</td>
            <td>cedrickmanzi0@gmail.com</td>
            <td>Kigali,Rwanda</td>
            <td>10 Orders</td>
            <td>$800,000-$1000,000</td>
            <td>+250 0780918379</td>
            <td><FaPencilAlt className='text-[#FA4B0C] cursor-pointer'/></td>    
            <td><FaHamburger className='text-[#FA4B0C] cursor-pointer'/></td>        
        </tr>
        <tr>
            <td className="roundd"><img className='rounded-full w-12' src="https://i.pinimg.com/originals/26/8d/88/268d886c389d98db13c59da55c5dc789.jpg" alt="No" /></td>
            <td>Manzi Cedrick</td>
            <td>cedrickmanzi0@gmail.com</td>
            <td>Kigali,Rwanda</td>
            <td>10 Orders</td>
            <td>$800,000-$1000,000</td>
            <td>+250 0780918379</td>
            <td><FaPencilAlt className='text-[#FA4B0C] cursor-pointer'/></td>    
            <td><FaHamburger className='text-[#FA4B0C] cursor-pointer'/></td>        
        </tr>
        <tr>
            <td className="roundd"><img className='rounded-full w-12' src="https://i.pinimg.com/originals/26/8d/88/268d886c389d98db13c59da55c5dc789.jpg" alt="No" /></td>
            <td>Manzi Cedrick</td>
            <td>cedrickmanzi0@gmail.com</td>
            <td>Kigali,Rwanda</td>
            <td>10 Orders</td>
            <td>$800,000-$1000,000</td>
            <td>+250 0780918379</td>
            <td><FaPencilAlt className='text-[#FA4B0C] cursor-pointer'/></td>    
            <td><FaHamburger className='text-[#FA4B0C] cursor-pointer'/></td>        
        </tr> */}
        </tbody>
    </table>
</div>
</>
      })
  )
}

export default ClientShowCase