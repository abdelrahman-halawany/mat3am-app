import { useDispatch } from "react-redux";
import { change } from "../features/showfullslices";

export default function Bars(){
    const dispatch =useDispatch();
    return(
        
        <div
            className="w-10 cursor-pointer pt-1.5"
             onClick={() => dispatch(change()) }
              >
            <div className="h-1.25 my-1.25 bg-zinc-500 w-7.5 mx-auto "></div>
            <div className="h-1.25 my-1.25 bg-zinc-500 w-7.5 mx-auto "></div>
            <div className="h-1.25 my-1.25 bg-zinc-500 w-7.5 mx-auto "></div>
        </div>

    );
}