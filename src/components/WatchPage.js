import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row px-5">
                <div className="flex-1">
                    <iframe
                        className="w-full aspect-video rounded-2xl shadow-2xl"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="flex-1 lg:ml-5 mt-5 lg:mt-0">
                    <LiveChat />
                </div>
            </div>
            <div className="mt-5 px-5">
                <CommentContainer />
            </div>
        </div>
    );
};

export default WatchPage;
