import React from 'react'
import './styles/client.css'
import Logo from './styles/logo.png'
import SignUp from './styles/signup.png'
import './styles.css';
function Client() {
  return (
    <div className='container'>
        <div className='logo_container'>
             <div className='name'>
                 <img src={`${Logo}`} alt="Logo for sproute" className="logo"/>
                <h1 className="sprout">SPROUT</h1>
                <h1>Meals</h1>
             </div>
             <div className='icon'>
                 <img src={`${SignUp}`} alt='signup'/>
             </div>
        </div>
    <div className="form_part">
     <form>
         <h1>Client</h1>
         <div className="set">
         <label id="username">Client</label>
         <input type='text' placeholder="Username" required/>
         </div>
         <div className="set">
         <label id="email">Category</label>
         <input type='text' placeholder="Email Address" required />
         </div>
         <div className="set">
         <label id="password">Representative</label>
         <input type='password' placeholder="Password" required />
         </div>
         <div className="set">
         <label id="phone">Date of Creation</label>
         <input type='text' placeholder="Date of Creation" required />
         </div>
         <div className="set">
            <label id="phone">Address</label>
            <input type='text' placeholder="Address" required />
        </div>
        <div className="set">
            <label id="phone">Email</label>
            <input type='text' placeholder="Email" required />
        </div>
        <div className="set">
            <label id="phone">Bank account(IBAN)</label>
            <input type='text' placeholder="Bank account" required />
        </div>
         
        <button type="submit" className="submit-btn">Add Client</button>
         
     </form>
    </div>
 </div>
  )
}

export default Client