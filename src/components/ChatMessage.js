const ChatMessage =(props)=>{
    const {name,message}=props;


    return(
        <div className="flex items-center shadow-sm ">
            <img alt="user" className="w-10 h-10 p-2" 
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
            <span className="m-2 font-bold text-sm">{name}</span>
            <span className="m-2 text-sm">{message}</span>
        </div>
    )
}

export default ChatMessage;