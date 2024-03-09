import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";

const VideoContainer = () => {
    const dispatch = useDispatch();
    const key = process.env.REACT_APP_MY_API_KEY;
    // const[videos, setVideos] = useState([]);
    const videos = useSelector((store) => store.video.videos);
    // console.log(videos);

    useEffect(() => {
        getVideos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API + `${key}`);
        const json = await data.json();
        const videolist = json.items;
        dispatch(addVideos({
            video: videolist,

        }))

    }

    return (
        <div className="flex flex-wrap justify-center">
            {
                videos[0]?.video?.map((v) => (
                    <Link to={"/watch?v=" + v.id} key={v.id}>
                        <VideoCard info={v} />
                    </Link>))
            }
        </div>
    )
}

export default VideoContainer;