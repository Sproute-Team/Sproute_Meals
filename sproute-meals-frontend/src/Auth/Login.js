import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/index.css'
import Logo from './styles/logo.png'
import {Link } from 'react-router-dom'
import login from './styles/login.svg'
import { ChatState } from '../context/AppContext'
function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
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
        const LoginData = async ()=>{
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
              setInfos([...userInfos,data]);
              let token = data.token.accessToken;
              setUserToken(token);
              localStorage.setItem("token", token);
              if(token) {
                navigate('/overview');
              }
        }
        LoginData()
        setEmail('')
        setPassword('')
    }
  return (
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
                    <label id="email" className='labels'>Email</label>
                    <input type='email' onChange={getEmail} value={email} placeholder="Email Address" required />
                </div>
                <div className="set">
                    <label id="password" className='labels'> Password</label>
                    <input type='text' onChange={getPassword} value={password} placeholder="Password" required />
                </div>
                <button type="submit" className="submit">Login</button>
                <p className='para bottom-0'>All rights reserved 2022</p>
                <p className='para bottom-6'>Don't Have an Account <Link to='/signup' className='text-blue-900'>Sign Up</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login