import React from 'react'
import {Link} from 'react-router-dom';
import signUp from './styles/signup.png'
import './styles/signup.css'
function SignUp() {
  return (
    <div className='container'>
    <div className='logo_container'>
         <div className='name'>
             <img src="logo.png" alt="Logo for sproute" className="logo"/>
            <h1 className="sprout">SPROUT</h1>
            <h1>Meals</h1>
         </div>
         <div className='icon'>
             <img src={`${signUp}`} alt='signup'/>
         </div>
    </div>
<div className="form_part">
 <form>
     <h1>Sign Up</h1>
     <div className="set">
     <label id="username">Username</label>
     <input type='text' placeholder="Username" required/>
     </div>
     <div className="set">
     <label id="email">Email</label>
     <input type='email' placeholder="Email Address" required />
     </div>
     <div className="set">
     <label id="password"> Password</label>
     <input type='password' placeholder="Password" required />
     </div>
     <div className="set">
     <label id="phone">Telephone</label>
     <input type='text' placeholder="Phone" required />
     </div>
    <button className='btn submit' type="submit">Sign Up</button>
     <p>Already have an account?<Link to ='/login' className='logIn'>Log In</Link></p>
 </form>
</div>
</div>
  )
}

export default SignUp