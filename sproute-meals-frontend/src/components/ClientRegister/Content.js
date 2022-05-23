import {React , useState} from 'react';
import './styles/content.css';
import Form from './Form';
import FormTwo from './FormTwo';
import FormThree from './FormThree';

const Content = () => {
    const [showFormOne,setFormOne] = useState(false)
    const [showFormTwo,setShowFormTwo] = useState(false)
    const [showFormThree,setshowFormThree] = useState(false)
    return ( 
        <div className="All mt-[3em] flex justify-around">
        <div className='bg-[#FCEEEE] w-[25vw] h-[50vh] rounded-lg'>
            <div className='p-5'>
            <small className='font-bold text-2xl'>1.</small><span className={`font-bold text-black pl-2`}>Create Your Restaurant profile</span>
            </div>
            <div className='flex bg-white hover:cursor-pointer  border-l-4 border-solid border-[#FA4B0C] gap-2 w-full pt-5'>
                <div className='bg-[#FA4b0c] rounded-full justify-center w-12 h-12 ml-5 flex place-items-center text-white'><span  className={`text-sm`}>1</span></div>
                <div className='block'><span className="font-semibold text-[14px]">Restaurant Information</span><span className='block px-2 text-[#00000054] text-[12px] pb-2'>Restaurant name,address,city and Owner's details</span></div>
            </div>
            <div className={`flex hover:bg-white ${showFormTwo && 'bg-white border-l-4 border-solid border-[#FA4B0C] '} hover:cursor-pointer  gap-2 w-full pt-5`} onClick={()=>{setShowFormTwo((prev)=>!prev)}}>
                <div className={`${showFormTwo ? 'bg-[#FA4b0c]' :'bg-black'} rounded-full justify-center w-12 h-12 ml-5 flex place-items-center text-white`}><span  className={`text-sm`}>2</span></div>
                <div className='block'><span className="font-semibold text-[14px]">Restaurant Information</span><span className='block px-2 text-[#00000054] text-[12px] pb-2'>Restaurant name,address,city and Owner's details</span></div>
            </div>
            <div className={`flex hover:bg-white ${showFormThree && 'bg-white border-l-4 border-solid border-[#FA4B0C] '} hover:cursor-pointer gap-2 w-full pt-5`} onClick={()=>{setshowFormThree(true)}}>
                <div className={`${showFormThree ? 'bg-[#FA4b0c]' :'bg-black'} rounded-full justify-center w-12 h-12 ml-5 flex place-items-center text-white`}><span  className={`text-sm`}>3</span></div>
                <div className='block'><span className="font-semibold text-[14px]">Restaurant Information</span><span className='block px-2 text-[#00000054] text-[12px] pb-2'>Restaurant name,address,city and Owner's details</span></div>
            </div>
        </div>
        {showFormOne ? showFormTwo ? <FormTwo/> : <Form/>
        :showFormThree ? <FormThree/> : <FormTwo/>
        }  
        </div>
     );
}
 
export default Content;