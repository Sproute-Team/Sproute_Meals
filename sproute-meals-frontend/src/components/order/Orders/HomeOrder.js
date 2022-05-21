import React,{useEffect} from 'react'
import CreateNew from './CreateNew'
// import {FaSearch,FaBell } from 'react-icons/fa'
import Delivered from './Delivered'
import Header from './Header'
import Menu from './Menu'
import OrderNow from './OrderNow'
// import axios from 'axios'
function HomeOrder() {
//   const FetchData = async ()=>{
//     const orderlists = await fetch(`http://196.223.240.154:8099/supapp/api/orders`,{
//       method: 'GET',
//       credentials: 'include',
//       headers:{
//         'Content-type': 'application/json', 
//         'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIzMiIsInN1YiI6IjMyIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sInVzZXIiOnsiaWQiOjMyLCJuYW1lIjoiQnVnaW5nbyBFbHVhIDA3ODA5MTgzNzkiLCJ1c2VybmFtZSI6IjE5NzI0MSIsIm1vYmlsZSI6bnVsbCwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sImFjY291bnROb25FeHBpcmVkIjp0cnVlLCJhY2NvdW50Tm9uTG9ja2VkIjp0cnVlLCJjcmVkZW50aWFsc05vbkV4cGlyZWQiOnRydWUsImVuYWJsZWQiOnRydWV9LCJpYXQiOjE2NTI5MDA0MDUsImV4cCI6MTY1Mjk4NjgwNX0.3eRholAbnBJ2skTtPqWnUkHEpmVQRJ8PWDQ90axSbLramtdFEU_PpK9xfvvrU4FReZaBdBV4vi5vQZ4-PyQqnw`
//       }
//     });
//     console.log(orderlists)
// }
// useEffect(() => {
// FetchData();
// }, [])

  return (
    <div className="w-[85vw] bg-[#F7F8FC] h-screen">
        <Header/>
        <Menu/>
        <div className='flex'>
        <div className="overflow-y-scroll mt-2 w-[80vw] h-[75vh]">
        <OrderNow/>
        </div>
        <div className='flex flex-col overflow-y-scroll mt-2 w-[50vw] h-[75vh]'>
        <Delivered/>
        <CreateNew/>
        </div>
        </div>
    </div>
  )
}

export default HomeOrder