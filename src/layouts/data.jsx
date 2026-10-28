import { Outlet } from "react-router-dom";

export default function Data(){
    return(
        <div className="bg-zinc-200">
            <Outlet/>
        </div>
    )
}