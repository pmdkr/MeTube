import { Outlet } from "react-router-dom";
// import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = ()=>{

    return(
        <div className="flex">
            <Sidebar/>
            <Outlet/>

        </div>
    )
}

export default Body;