import Bars from "../components/bars";
import Profile from "../components/profile";

export default function Header(){
    return(
        <div className="bg-zinc-300 flex justify-between">
            <Bars/>
            <Profile/>
        </div>
    )
}