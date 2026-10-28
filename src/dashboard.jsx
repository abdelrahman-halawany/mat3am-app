import { Outlet } from "react-router-dom";
import Content from "./layouts/content";
import Links from "./layouts/links";
import DashHome from "./pages/dash/dashhome";

export default function DashBoard(){
    return(
       
        
        <div className=" min-h-screen flex">
            <Links/>
            <Content/>
            
        </div>
        
    )
}