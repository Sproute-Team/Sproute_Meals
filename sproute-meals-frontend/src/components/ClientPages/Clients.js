import Cookies from 'js-cookie';
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../order/Orders/SideBar';
import ClientAdd from "./ClientAdd";
import ClientHeader from "./ClientHeader";
import ClientShowCase from "./ClientShowCase";

const Clients = () => { 
    const [showClients,setShowClients] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
    const tokenActivated = Cookies.get('token');
    tokenActivated ? setShowClients(true) : navigate('/login');
    },[])
    return (
        <>
        {showClients &&
        <div className="flex bg-[#F7F8FC] w-full">
            <SideBar/>
            <div className="block ">
                <ClientHeader/>
                <ClientAdd/>
                <ClientShowCase/>
            </div>
        </div>
        }
        </>
    );
}

export default Clients;