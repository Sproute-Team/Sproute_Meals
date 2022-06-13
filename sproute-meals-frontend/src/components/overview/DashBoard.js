import Cookies from 'js-cookie'
import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatState } from '../../context/AppContext'
import SideBar from '../order/Orders/SideBar'
import HomeBar from './HomeBar'

function DashBoard() {
  const {user_token,setUserToken,userInfos,setInfos,show,setShow} = ChatState()
  const navigate = useNavigate();
    useEffect(() => {
    const tokenActivated = Cookies.get('token');
    tokenActivated ? setShow(true) : navigate('/login');
    },[])
  return (
    <>
    {show &&
    <div className="dashboard bg-[#F7F8FC] flex">
        <SideBar />
        <HomeBar/>
    </div>
    }
    </>
  )
}

export default DashBoard 