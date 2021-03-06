import {React,useState} from 'react'
import {Link} from 'react-router-dom';
import signUp from './styles/signup.png'
import {useNavigate} from 'react-router-dom'
import logo from './styles/logo.png'
import Loader from './Loader';
function SignUp() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('')
  const [showLoader,setLoader] = useState(false)
  const navigate = useNavigate()
  const [telephone,setTelephone] = useState('')
  const getUsername=(e)=>{
    setUsername(e.target.value)
  }
  const getPassword=(e)=>{
    setPassword(e.target.value)
  }
  const getEmail=(e)=>{
    setEmail(e.target.value)
  }
  const getTelephone=(e)=>{
    setTelephone(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const SignUpData = async () =>{
      setLoader(true)
      const PostData = await fetch('http://196.223.240.154:8099/supapp/api/auth/client/signup',{
      method : 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body : JSON.stringify({
        email:email,
        firstName: username,
        lastName :username,
        mobile :telephone,
        password : password,
      })
    })
    const data = PostData.json();
    if(data){
      setLoader(false)
      navigate('/login');
    }
    if(!data){
      setLoader(false);
    }
  }
    SignUpData()
    setEmail('')
    setUsername('')
    setPassword('')
    setTelephone('')
  }
  return (
    <>
    {showLoader ? <Loader/> :
    <div className='container'>
      <div className='logo_container'>
          <div className='name'>
              <img src={logo} alt="Logo for sproute" className="logo"/>
              <h1 className="sprout pt-3 text-[#FA4b0c] text-2xl">PROUT</h1>
              <h1 className="sprout pt-4 pl-1">Meals</h1>
          </div>
          <div className='icon'>
              <img src={signUp} alt='signup'/>
          </div>
      </div>
      <div className="form_part" onSubmit={handleSubmit}>
      <form>
          <h1 className="pb-3 font-bold text-xl">Sign Up</h1>
          <div className="set">
            <label id="username" className='labels'>Username <label className='text-red-600'>*</label> </label>
            <input type='text' onChange={getUsername} value={username} placeholder="Username" required/>
          </div>
          <div className="set">
            <label id="email" className='labels'>Email <label className='text-red-600'>*</label> </label>
            <input type='email' onChange={getEmail} value={email} placeholder="Email Address" required />
          </div>
          <div className="set">
            <label id="password" className='labels'>Password <label className='text-red-600'>*</label> </label>
            <input type='password' onChange={getPassword} value={password} placeholder="Password" required />
          </div>
          <div className="set">
            <label id="phone" className='labels'>Telephone</label>
            <input type='text' onChange={getTelephone} pattern="[0-9]+" value={telephone} placeholder="Telephone" required />
          </div>
          <button className='btn submit' type="submit">Sign Up</button>
          <p className='para text-[12px] bottom-0'>All rights reserved 2022</p>
          <p className='para text-[14px] bottom-4'>Already Have an Account <Link to='/login' className='text-blue-900'>Login</Link></p>
      </form>
      </div>
    </div>
    }
    </>
  )
}

export default SignUp