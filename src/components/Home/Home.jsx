import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import SideBar from "../SideBar/SideBar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex gap-20 mt-24 w-11/12 mx-auto">
            <SideBar></SideBar>
            <Outlet></Outlet>
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;