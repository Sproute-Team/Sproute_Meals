import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatState } from '../../context/AppContext'
import Menu from './addMenu'
import Header from './Header'
import MenuItems from './menuItems'

function AllMenu() {
const {user_token,setUserToken,userInfos,setInfos,show,setShow} = ChatState()
const navigate = useNavigate();
  useEffect(() => {
  const tokenActivated = Cookies.get('token');
  tokenActivated ? setShow(true) : navigate('/login');
  },[])
    
  return (
    <>
    {show &&
    <div className="flex w-screen overflow-y-auto bg-[#F7F8FC] flex-col">
        <Header/>
        <div className='flex bg-white mx-5 mt-4 rounded-xl  flex-col'>
            <Menu/>
            <MenuItems/>
        </div>
    </div>
    }
    </>
  )
}

export default AllMenu