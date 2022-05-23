import React from 'react'
import './styles/index.css'
import Logo from './styles/logo.png'
import {Link } from 'react-router-dom'
import login from './styles/login.svg'
function Login() {
  return (
    <div class='container'>
        <div class='logo_container'>
            <div class='name'>
                <img src={`${Logo}`} alt="Logo for us" class="logo"/>
                <h1 className="sprout pt-3 text-[#FA4b0c] text-2xl">PROUT</h1>
              <h1 className="sprout pt-4 pl-1">Meals</h1>
            </div>
            <div class='icon'>
                <img src={`${login}`} alt='signup'/>
            </div>
        </div>
        <div class="form_part">
            <form>
                <h1 className='pb-5 font-bold text-xl'>Login</h1>
                <div class="set">
                    <label id="email" className='labels'>Email</label>
                    <input type='email' placeholder="Email Address" required />
                </div>
                <div class="set">
                    <label id="password" className='labels'> Password</label>
                    <input type='password' placeholder="Password" required />
                </div>
                <button type="submit" class="submit"><Link to='/overview'>Login</Link></button>
                <p className='para bottom-0'>All rights reserved 2022</p>
                <p className='para bottom-6'>Don't Have an Account <Link to='/signup' className='text-blue-900'>Sign Up</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login