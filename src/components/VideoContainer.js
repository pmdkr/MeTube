import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ()=>{
    // console.log(process.env.REACT_APP_MY_API_KEY);
    const[videos, setVideos] = useState([]);
    
    useEffect(()=>{
        getVideos();



    },[]);

    const getVideos= async()=>{
        const data = await fetch(YOUTUBE_VIDEOS_API);
        // const url=(YOUTUBE_VIDEOS_API);
        // console.log(url);
        const json = await data.json();
        setVideos(json.items);
        console.log(json.items);

    }

    return(
        <div className="flex flex-wrap justify-center">
            {videos?.map((video)=>(
            <Link to={"/watch?v="+video.id} key={video.id}>
               <VideoCard  info={video}/>
            </Link>))
            }
            
            

        </div>
    )
}

export default VideoContainer;