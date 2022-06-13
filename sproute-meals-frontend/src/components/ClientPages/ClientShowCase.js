import React,{useEffect,useState} from 'react'
import {FaPencilAlt, FaHamburger, FaEllipsisV } from 'react-icons/fa'
import Cookies from 'js-cookie'
import './styles.css'
function ClientShowCase() {
    const [clients,setClients]=useState([])
    useEffect(()=>{
        const getClients = async ()=>{
            const user_tokens = Cookies.get('token');
            const ClientsData = await fetch('http://196.223.240.154:8099/supapp/api/users',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    Authorization :`Bearer ${user_tokens}`,
                } 
            })
            let ClientUpdate = await ClientsData.json()
            setClients(ClientUpdate.content);
            console.log(ClientUpdate.content);
        }
        getClients()
    },[])
  return (
      <>
<div className="table-wrapper relative">
    <table className="fl-table">
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
        {clients.map((client) =>(
        <tr key={client.id}>
            <td className="roundd"><img className='rounded-full w-12 pro' src="https://i.pinimg.com/originals/26/8d/88/268d886c389d98db13c59da55c5dc789.jpg" alt="No" /></td>
            <td>{client.firstName}</td>
            <td>{client.email}</td>
            <td>Kigali,Rwanda</td>
            <td>10 Orders</td>
            <td>$800,000-$1000,000</td>
            <td>{client.mobile}</td>
            <td><FaPencilAlt className='text-[#FA4B0C] cursor-pointer'/></td>    
            <td><FaEllipsisV className='text-[#FA4B0C] cursor-pointer'/></td>        
        </tr>
        ))}
        </tbody>
    </table>
    
</div>
</>
  )
}

export default ClientShowCase