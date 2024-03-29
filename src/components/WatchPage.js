import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
// import { VIDEO_BY_ID } from "../utils/constants";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
        // getVideoById();
    }, []);

    // const getVideoById= async()=>{
    //     const data = await fetch(MOST_POPULAR_VIDEOS);
    //     const json =  await data.json();
    //     console.log(json.items);


    // };

    return (
        <div className="flex flex-col w-full">
            <div className="px-5 flex">
                <div>
                    <iframe width="740"
                        height="396"
                        className="rounded-2xl shadow-2xl ml-16"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="Janiye Mashup | Jay Guldekar | Vishal Mishra Mashup | Naseeb Se"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>

                    </iframe>


                </div>
                <div className="w-full">
                    <LiveChat />
                </div>


            </div>
            <CommentContainer />

        </div>

    )
}
export default WatchPage;