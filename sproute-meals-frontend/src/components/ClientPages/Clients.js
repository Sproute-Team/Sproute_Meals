import React from 'react'
import SideBar from '../order/Orders/SideBar';
import ClientAdd from "./ClientAdd";
import ClientHeader from "./ClientHeader";
import ClientShowCase from "./ClientShowCase";
import './styles.css';
const Clients = () => {     
    return (
        <div className="flex bg-[#F7F8FC] w-full">
            <SideBar/>
            <div className="block ">
                <ClientHeader/>
                <ClientAdd/>
                <ClientShowCase/>
            </div>
        </div>
    );
}

export default Clients;