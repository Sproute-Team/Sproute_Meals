import React from 'react'
import './styles/index.css'
import Logo from './styles/logo.png'
import SignUp from './styles/signup.png'
function Login() {
  return (
    <div class='container'>
        <div class='logo_container'>
            <div class='name'>
                <img src={`${Logo}`} alt="Logo for us" class="logo"/>
                <h1 class="sprout">SPROUT</h1>
                <h1 class="meals">Meals</h1>
            </div>
            <div class='icon'>
                <img src={`${SignUp}`} alt='signup'/>
            </div>
        </div>
        <div class="form_part">
            <form>
                <h1>Login</h1>
                <div class="set">
                    <label id="email">Email</label>
                    <input type='email' placeholder="Email Address" required />
                </div>
                <div class="set">
                    <label id="password"> Password</label>
                    <input type='password' placeholder="Password" required />
                </div>
                <button type="submit" class="submit">Login</button>
                <p>All rights reserved 2022</p>
            </form>
        </div>
    </div>
  )
}

export default Login