const Button =(props)=>{
    const {name}=props


    return(
        <div>
            <button className="p-1 px-2 m-2 bg-gray-200 font-medium text-sm rounded-lg">{name}</button>

        </div>
    )
}

export default Button;