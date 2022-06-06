import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/index.css'
import Logo from './styles/logo.png'
import {Link } from 'react-router-dom'
import login from './styles/login.svg'
import { ChatState } from '../context/AppContext'
import Loader from './Loader'
import Cookies from 'js-cookie'
function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const [showLoader,setLoader] = useState(false)
    const navigate= useNavigate()
    const {user_token,setUserToken,userInfos,setInfos} = ChatState()
    const getEmail =(e)=>{
        setEmail(e.target.value);
    }
    const getPassword =(e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let auth_token;
        const LoginData = async ()=>{
            setLoader(true)
            const PostData = await fetch('http://196.223.240.154:8099/supapp/api/auth/signin',{
                method : 'POST',
                headers:{
                  'Content-Type':'application/json'
                },
                body: JSON.stringify({
                  login:email,
                  password : password,
                })
              })
              const data = await PostData.json();
              setInfos(data);
              console.log(data);
              
              let token = data.token.accessToken
              if(token) {
                setLoader(false)
                navigate('/overview');
                auth_token= Cookies.set('token', token,{expires : 7});
                const tokens= Cookies.get('token', token);
                console.log("The Token is: ",tokens)
              }
              if(!token){
                setLoader(false)
                navigate('/login');
              }
            }
        LoginData()
        setEmail('')
        setPassword('')
    }
  return (
    <>
    {showLoader ? <Loader/> :
    <div className='container'>
        <div className='logo_container'>
            <div className='name'>
                <img src={`${Logo}`} alt="Logo for us" className="logo"/>
                <h1 className="sprout pt-3 text-[#FA4b0c] text-2xl">PROUT</h1>
              <h1 className="sprout pt-4 pl-1">Meals</h1>
            </div>
            <div className='icon'>
                <img src={`${login}`} alt='signup'/>
            </div>
        </div>
        <div className="form_part">
            <form onSubmit={handleSubmit}>
                <h1 className='pb-5 font-bold text-xl'>Login</h1>
                <div className="set">
                    <label id="email" className='labels'>Email <label className='text-red-600'>*</label> </label>
                    <input type='email' onChange={getEmail} value={email} placeholder="Email Address" required />
                </div>
                <div className="set">
                    <label id="password" className='labels'>Password <label className='text-red-600'>*</label> </label>
                    <input type='text' onChange={getPassword} value={password} placeholder="Password" required />
                </div>
                <button type="submit" className="submit">Login</button>
                <p className='para  text-[12px]  bottom-0'>All rights reserved 2022</p>
                <p className='para  text-[14px]  bottom-6'>Don't Have an Account <Link to='/signup' className='text-blue-900'>Sign Up</Link></p>
            </form>
        </div>
    </div>
    }
    </>
  )
}

export default Login