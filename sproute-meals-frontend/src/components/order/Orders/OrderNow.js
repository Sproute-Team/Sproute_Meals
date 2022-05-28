import {React,useEffect, useState} from 'react'
import { ChatState } from '../../../context/AppContext'

function OrderNow() {
    const {user_token,setUserToken,userInfos,setInfos} = ChatState()
    const dummyDatas =[{
        orderNumber: 1,
        orderDate: new Date().toDateString(),
        address:'Kigabagabaga,Rwanda',
        orderName :'PanCakes',
        Table : 1,
        price : 5000,
        userDetailName : 'Guest',
        userDetailPhone :'0780918379'
    },{
        orderNumber: 2,
        orderDate: new Date().toDateString(),
        address:'Kigabagabaga,Rwanda',
        orderName :'PanCakes',
        Table : 2,
        price : 5000,
        userDetailName : 'Guest',
        userDetailPhone :'0780918379'
    }]
    const [Orders,setOrders]= useState([]);
    const [Ord,setOrd]= useState([]);
    useEffect(()=>{
        const getOrders = async ()=>{
            console.log("User Token",user_token);
            const OrdersData = await fetch('http://196.223.240.154:8099/supapp/api/orders',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    Authorization :`Bearer ${user_token}`,
                } 
            })
            const data =await OrdersData.json()
            // console.log("Orders Data Content",await data.content)
            setOrd(data.content)
        }
        getOrders()
    },[])
    console.log("Order Data",Ord)
    return (
      <>
    {Ord ? (Ord.map((order)=>(
    <div key={order.id} className="bg-white border-2 border-solid border-[#FA4B0C55] ml-5 mt-5 w-[50vw] flex justify-between rounded-2xl">
            <div className="block pt-10 px-5 w-72 bg-red-500">
                <span className="text-[#FA4B0C] text-xl font-bold">Order {order.id}</span>
                <p className="text-[rgba(0,0,0,0.4)] text-[12px] font-bold ">as of {order.createdAt}</p>
            </div>
            <div className="block pt-2">
                <span className="text-[rgba(0,0,0,0.4)] text-[12px] font-bold">{order.serviceProvider.address}</span>
                <div className="flex gap-2">
                <div className="pt-1 text-[16px]  border-r-2 border-solid border-black text-xl font-bold"><span>{order.orderDetails.map((item)=>{return item.item.name})}</span></div>
                <span className="text-[#FA4B0C] text-xl font-bold">{order.orderDetails.map((quantity)=>{return quantity.quantity})}</span>
                </div>
                <div className='flex gap-2 pt-6'>
                <svg width="40" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
                <span className="text-[#FA4B0C] text-[14px] font-semibold -translate-y-3">Table {order.orderType}</span>
                <svg width="40" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
                </div>
            </div>
            <div className='block pt-2 pr-5'>
            <span className="text-[#FA4B0C] text-xl font-bold"> {order.orderDetails.map((item)=>{return item.item.unitPrice})} Frw</span>
            <div className='flex gap-2 pt-6'>
                <svg  width="40" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
                <span className="text-[#FA4B0C] text-[12px] -translate-y-2">{order.customer.firstName}</span>
                <svg width="40" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
            </div>
            <p className="text-[rgba(0,0,0,0.4)] text-[12px] font-bold ">{order.customer.mobile}</p>
            </div>
        </div>
    ))):('Yooo')}
    </>
  )
}

export default OrderNow