export default function Table({thList, children}){
    return(
        <div className="my-2.5 w-[95%] mx-auto">
            <table className="w-full border border-zinc-400 border-collapse">
                <thead>
                    <tr>
                        {
                            thList.map(th => (
                            <th 
                            key={th.id}
                            className="border border-zinc-400 h-10">{th.content}</th>
                        ))
                        }
                        
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}