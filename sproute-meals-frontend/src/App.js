import {
  BrowserRouter,
  Routes,
  Route,
}  from "react-router-dom";
import RenderOrder from './Pages/RenderOrder';
import RenderOverview from './Pages/RenderOverview';
import RenderMenu from './Pages/RenderMenu';
import RenderAll from "./Pages/RenderAll";
import Clients from "./components/ClientPages/Clients";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import HomeSection from "./components/Home/Home";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeSection/>}/>
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
