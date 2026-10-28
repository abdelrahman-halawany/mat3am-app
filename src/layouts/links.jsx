import { NavLink } from "react-router-dom";
import { linkedList } from "../store/linkedlist";
import { useSelector } from "react-redux";

export default function Links(){
    const showFull = useSelector((state)=> state.showFull.value)
    return(
        <section className={`bg-sky-800 change-fs ${showFull? "w-0" : "w-[20%]"}`}>
            <div className="text-zinc-300 text-center py-3 text-xl border-b border-white/2">
                mat3am
            </div>
            <nav>
                {
                    linkedList.map(link =>(
                        <NavLink 
                            key={link.id}
                            to={link.to}
                            className={({isActive})=> `${isActive? "bg-green-800": ""} " block text-center  py-3 text-zinc-200 text-xl border-b border-white/20 hover:bg-green-800"`}
                        >
                            {link.content}
                            </NavLink>
                    ))
                }
            </nav>
        </section>
    )
}