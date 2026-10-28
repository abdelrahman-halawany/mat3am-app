import PageTitle from "../../../components/pagetitle";
import Table from "../../../components/table";
const thList=[
    {
        id:1,
        content: "employee",
    },
    {
        id:2,
        content: "job title",
    },
    {
        id:3,
        content: "department",
    },
    {
        id:4,
        content: "branch",
    },
    {
        id:5,
        content: "salary",
    },

    

]

export default function AreaPage(){
    return(
        <>
         <PageTitle content={"area"}/>
        <Table thList={thList}>
            <tr>
                <td className="text-center h-10 border border-zinc-400 text-sm">ahmed mahmoud</td>
                <td className="text-center h-10 border border-zinc-400 text-sm">accountant</td>
                 <td className="text-center h-10 border border-zinc-400 text-sm">finance</td>
                <td className="text-center h-10 border border-zinc-400 text-sm">cairo</td>
                 <td className="text-center h-10 border border-zinc-400 text-sm">14</td>
                
            </tr>

        </Table>
        </>
       
    )
}