import { Link, NavLink } from "react-router-dom";


const SideBar = () => {
    return (
        <div className="flex flex-col gap-6 bg-slate-400 p-16">
            <h2>sidebar</h2>
           <NavLink to="/">Home</NavLink>
            <NavLink to="/cricket">Cricket</NavLink>
           <NavLink to="/football">Football</NavLink>
        </div>
    );
};

export default SideBar;