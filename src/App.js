import {
  BrowserRouter,
  Routes,
  Route,
}  from "react-router-dom";
import RenderOrder from './Pages/RenderOrder';
import RenderOverview from './Pages/RenderOverview';
import RenderMenu from './Pages/RenderMenu';
import RenderAll from "./Pages/RenderAll";
// import RenderAll from './RegisterClient/RenderAll';
// import AllLanding from './LandingPages/AllLanding';

// import LogIn from './Auth/LogIn';
// import SignUp from './Auth/SignUp';
import './App.css';
import Clients from "./components/ClientPages/Clients";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {/* <Route path="/" element={<AllLanding/>}/> */}
          <Route path='/registerClient' element={<RenderAll/>}/>
          {/* <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/menu' element={<RenderMenu/>}/>
          <Route path="/orders" element={<RenderOrder/>}/>
          <Route path="/overview" element={<RenderOverview/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
