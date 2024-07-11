import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
// import { useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../utils/videoSlice";

const VideoContainer = () => {
    const dispatch = useDispatch();
    const key = process.env.REACT_APP_MY_API_KEY;
    console.log(key);
    // const[videos, setVideos] = useState([]);
    const videos = useSelector((store) => store.video.videos);

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
        }));
    }

    return (
        <div className="p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {videos[0]?.video?.map((vid) => (
                <Link to={"/watch?v=" + vid.id} key={vid.id} className="w-full">
                    <VideoCard info={vid} />
                </Link>
            ))}
        </div>
    );
}

export default VideoContainer;
