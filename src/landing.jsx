import { Outlet } from "react-router-dom";

export default function Landing(){
    return(
        <>
        <h1 className="bg-indigo-500 text-center text-white text-xl">landing page</h1>
        <Outlet/>
        </>
    )
}