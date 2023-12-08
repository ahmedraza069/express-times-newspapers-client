import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className=""  style={{
                backgroundImage:
                  'url("https://i.ibb.co/Q6WTZNg/cool-background-6.png")',
              }}>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;