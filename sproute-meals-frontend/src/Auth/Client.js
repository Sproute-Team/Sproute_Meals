import React from 'react'
import './styles/client.css';
import Logo from './styles/logo.png';
import SignUp from './styles/signup.png';
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
    <div className="form_part overflow-y-scroll">
     <form>
         <h1>Client</h1>
         <div className="set">
         <label id="username" className='labels'>Client</label>
         <input type='text' placeholder="Username" required/>
         </div>
         <div className="set">
         <label id="email" className='labels'>Category</label>
         <input type='text' placeholder="Email Address" required />
         </div>
         <div className="set">
         <label id="password" className='labels'>Representative</label>
         <input type='password' placeholder="Password" required />
         </div>
         <div className="set">
         <label id="phone" className='labels'>Date of Creation</label>
         <input type='text' placeholder="Date of Creation" required />
         </div>
         <div className="set">
            <label id="phone" className='labels'>Address</label>
            <input type='text' placeholder="Address" required />
        </div>
        <div className="set">
            <label id="phone" className='labels'>Email</label>
            <input type='text' placeholder="Email" required />
        </div>
        <div className="set">
            <label id="phone" className='labels'>Bank account(IBAN)</label>
            <input type='text' placeholder="Bank account" required />
        </div>
         
        <button type="submit" className="submit">Add Client</button>
         
     </form>
    </div>
 </div>
  )
}

export default Client;