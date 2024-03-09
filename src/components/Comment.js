const Comment=({data})=>{

    const {name,text}=data;

    return(
        <div className="flex bg-gray-100 shadow-lg my-2">
            <img alt="user" className="w-10 h-10 p-2" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            <div>
                <p className=" ml-4 text-sm font-semibold ">{name}</p>
                <p className=" ml-4 text-sm ">{text}</p>
            </div>
        </div>
    )
}
export default Comment;