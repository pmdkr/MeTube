import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import WatchSearchVideo from './WatchSearchVideo';
import ButtonList from './ButtonList';



const SearchKeywordPage = () => {
    const [searchVideo, setSearchVideo] = useState([]);
    const [searchParams] = useSearchParams();
    const key = process.env.REACT_APP_MY_API_KEY;


    const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchParams}&key=${key}`;

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(apiUrl);
        const json = await data.json();
        setSearchVideo(json.items);
        // console.log(json.items);
    };



    return (
        <div>
            <div className='py-3'>
                <ButtonList />
            </div>
            <div className='py-12 h-[100vh]  w-[1500px] overflow-auto' >
                {searchVideo.map((video) => (

                    <Link to={"/watch?v=" + video.id.videoId} state={{ video: video }} key={video.id.videoId}>
                        <WatchSearchVideo videoData={video} />
                    </Link>
                )
                )}
            </div>
        </div>
    )
};

export default SearchKeywordPage;
