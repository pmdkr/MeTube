
const WatchSearchVideo = (videoData) => {
    const { snippet } = videoData.videoData;
    const{ title,thumbnails}=snippet;
    
    
    return (
        <div className=" hover:shadow-lg px-8 py-6 rounded-lg flex hover:animate-pulse  bg-red-50 ">
         <img
            className="rounded-lg h-30 w-50"
            src={thumbnails.medium.url}
            alt="thumbnail"
          /> 
          <div className="mx-2">
          <h1 className="font-bold  text-sm">
            {title.length > 40 ? title.substr(0, 40) + "..." : title}
          </h1>
          <div className="flex">
            <span className="">{title}</span>
            {/* <img className="w-3 h-3 my-2 mx-1" alt="verified" src={verified} /> */}
          </div>
        </div>
        </div>
      );
    };
export default WatchSearchVideo;