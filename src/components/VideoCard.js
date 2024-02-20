const VideoCard=({info})=>{
    // console.log(info);
    const{snippet, statistics
    }=info;

    const{channelTitle, title, thumbnails}=snippet;
    
    


    return(
        <div className="p-2 m-2 w-80 shadow-lg cursor-pointer">
            <img className="rounded-lg shadow-lg" alt="thumbnail" src={thumbnails.medium.url}/>
            <ul>
                <li className="py-2 font-medium text-sm">{title}</li>
                <li className="text-sm">{channelTitle}</li>
                <li className="font-semibold text-sm">{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;