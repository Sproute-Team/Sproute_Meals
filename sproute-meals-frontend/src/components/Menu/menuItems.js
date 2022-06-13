import React,{useEffect,useState} from "react";
import './menuItems.css';
import Cookies from 'js-cookie'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CreateNewMenu from "./CreateNewMenu";

const MenuItems = ()=>{
    const [menu,setMenu]=useState([]);
    const getMenu=async ()=>{
            const user_tokens = Cookies.get('token');
        const data = await fetch('http://196.223.240.154:8099/supapp/api/menu-items',{
            method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    Authorization :`Bearer ${user_tokens}`,
                } 
        })
        let MenuUpdate=await data.json();
        setMenu(MenuUpdate.content);
        console.log(menu);
    }
    useEffect(()=>{
        getMenu();
    },[])
    return (
        <div className="menu_section">
        <div className="menu " >
        {menu.map((menu)=>(
            <div className="menu_1" key={menu.id}>
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1497534446932-c925b458314e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbmtzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400" alt="drinks"/>
                </div>
                <div className="details">
                    <h4>Kaffir Lime Vodka,Lemon grass,Ginger,Citrus</h4>
                    <h1>{menu.name}</h1>
                    <span>{menu.unitPrice} RWF</span>
                </div>
            </div>
        ))}
        </div>
        <CreateNewMenu/>
          <div className=''>
            <button className="btn btn-primary flex rounded-[8px] p-4 bg-[#FA4b0c] text-white">More<FaArrowRight className="m-1 p-[2px]"/></button>
        </div>
        </div>
        
    )
}

export default MenuItems;