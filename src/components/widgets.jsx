export default function Widget({title,body,color}){
    return(
        <div className={`${color} h-50`}>
            <span className="block text-zinc-200 text-xl text-center leading-22 h-22">{title}</span>
            <span className="block text-zinc-200 text-xl text-center leading-22 h-22 ">{body}</span>
        </div>

    )
}