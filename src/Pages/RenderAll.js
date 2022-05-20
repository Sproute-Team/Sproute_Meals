// import Navbar from "../components/ClientRegister/Navbar";
import Content from '../components/ClientRegister/Content'
import Footer from "../components/ClientRegister/Footer";
import HeaderRegClient from "../components/ClientRegister/HeaderRegClient";
function RenderAll() {
    return (
        <div className="Render">
          <HeaderRegClient />
          <Content className="content"/>
          {/* <Footer /> */}
        </div>
      );
    }
    
    export default RenderAll;
    