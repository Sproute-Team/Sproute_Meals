import Cookies from 'js-cookie';
import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {FaChartPie,FaAd,FaUserAlt, FaSignOutAlt , FaClipboardCheck , FaAssistiveListeningSystems , FaCartPlus } from 'react-icons/fa'
import {Link } from 'react-router-dom'
// import RenderOverview from '../../RenderOverview'
function Icon() {
  const [showactive,setShowActive] = useState(false);
  const navigate=useNavigate()
  const handleLogout = ()=>{
    Cookies.remove('token');
    navigate('/login');
  }
  const StyleActiveLink=(path)=>{
    if(path === window.location.pathname){
     return "border-l-[6px] text-[#FA4B0C] border-solid border-[#FA4B0C] bg-slate-700";
    }
    return "";
  }
  return (
      <>
      {StyleActiveLink()}
    <Link to='/overview' className=' active:bg-red-500 sidee'>
    <div className={`flex text-white ${StyleActiveLink("/overview")} hover:cursor-pointer gap-4 mt-2 p-4 px-10 sidee`} onClick={()=>setShowActive(true)} >
        <FaChartPie className='text-xl'/><span className='text-[14px] sidee'>Overview</span>
    </div>
    </Link>
    <Link to='/orders'>
    <div className={`flex text-white ${StyleActiveLink("/orders")} hover:cursor-pointer gap-4 mt-2 p-4 px-10 sidee`} onClick={()=>setShowActive(true)}>
    <FaCartPlus className='text-xl'/><span className='text-[14px] sidee'>Orders</span>
    </div>
    </Link>
    <Link to='/clients'>
    <div className={`flex text-white ${StyleActiveLink("/clients")} hover:cursor-pointer gap-4 mt-2 p-4 px-10 sidee`}>
    <FaUserAlt className='text-xl'/><span className='text-[14px]'>Users</span>
    </div>
    </Link>
    <Link to='/menu'>
    <div className={`flex text-white ${StyleActiveLink("/menu")} hover:cursor-pointer gap-4 mt-2 p-4 px-10 sidee`}>
    <FaClipboardCheck className='text-xl'/><span className='text-[14px] sidee'>Menu</span>
    </div>
    </Link>
    <div className={`flex mt-[15em] text-white  hover:cursor-pointer gap-4 p-4 px-10 sidee`}>
    <FaAssistiveListeningSystems className='text-xl'/><span className='text-[14px]'>Settings</span>
    </div>
    <div className={`flex text-white hover:cursor-pointer gap-4 mt-2 p-4 px-10 sidee`} onClick={handleLogout}>
    <FaSignOutAlt className='text-xl'/><span className='text-[14px] sidee'>Log Out</span>
    </div>
    </>
  )
}

export default Icon