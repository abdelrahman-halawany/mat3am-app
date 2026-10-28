import { useSelector } from "react-redux";
import Data from "./data";
import Header from "./header";
import { Outlet } from "react-router-dom";

export default function Content(){
    const showFull = useSelector((state)=> state.showFull.value)
    return(
        <section className={ ` change-fs duration-300 grid col-1 grid-rows-[50px_auto_50px] ${showFull? "w-full" : "w-[80%]"} `}>
            <Header/>
            
            <Data/>
           <footer className="bg-zinc-300 text-center leading-12.5 text-sm">
                create by next
           </footer>
            
        </section>

    )
}