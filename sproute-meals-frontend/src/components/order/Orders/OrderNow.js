import {React, useState} from 'react'
function OrderNow() {
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
        orderNumber: 1,
        orderDate: new Date().toDateString(),
        address:'Kigabagabaga,Rwanda',
        orderName :'PanCakes',
        Table : 2,
        price : 5000,
        userDetailName : 'Guest',
        userDetailPhone :'0780918379'
    }]
    const [Orders,setOrders]= useState(dummyDatas);
    console.log(Orders);
  return (
      <>
    {Orders ? (Orders.map((order)=>(
    <div className="bg-white border-2 border-solid border-[#FA4B0C55] ml-5 mt-5 w-[50vw] flex justify-between rounded-2xl">
            <div className="block pt-10 px-5">
                <span className="text-[#FA4B0C] text-xl font-bold">Order {order.orderNumber}</span>
                <p className="text-[rgba(0,0,0,0.4)] text-[12px] font-bold ">as of {order.orderDate}</p>
            </div>
            <div className="block pt-2">
                <span className="text-[rgba(0,0,0,0.4)] text-[12px] font-bold">{order.address}</span>
                <div className="flex gap-2">
                <div className="pt-1 w-44 border-r-2 border-solid border-black text-xl font-bold"><span>{order.orderName}</span></div>
                <span className="text-[#FA4B0C] text-xl font-bold">2</span>
                </div>
                <div className='flex gap-2 pt-6'>
                <svg width="80" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
                <span className="text-[#FA4B0C] text-xl -translate-y-3">Table {order.Table}</span>
                <svg width="80" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
                </div>
            </div>
            <div className='block pt-2 pr-5'>
            <span className="text-[#FA4B0C] text-xl font-bold">{order.price} Frw</span>
            <div className='flex gap-2 pt-6'>
                <svg  width="40" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
                <span className="text-[#FA4B0C] text-xl -translate-y-3">{order.userDetailName}</span>
                <svg width="40" height="5" viewBox="0 0 80 5" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="80" y1="2.54492" y2="2.54492" stroke="black" stroke-width="4"/></svg>
            </div>
            <p className="text-[rgba(0,0,0,0.4)] text-[12px] font-bold ">{order.userDetailPhone}</p>
            </div>
        </div>
    ))):('Yooo')}
    </>
  )
}

export default OrderNow