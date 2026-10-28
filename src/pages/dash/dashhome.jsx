import PageTitle from "../../components/pagetitle";
import Widget from "../../components/widgets";
import Contnet from "../../layouts/content";
import Links from "../../layouts/links";

export default function DashHome(){
    return(
        <>
         <PageTitle content={"DashBoard"}/>
        <div className="grid grid-cols-3 gap-x-5 mx-auto my-3 ">
            <Widget
            title={"patients"}
            body={852}
            color={"bg-indigo-800"}/>
            <Widget
            title={"patients"}
            body={852}
            color={"bg-indigo-800"}/>
            <Widget
            title={"patients"}
            body={852}
            color={"bg-indigo-800"}/>
        </div>
        </>
       
    )
}