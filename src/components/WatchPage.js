import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
// import { VIDEO_BY_ID } from "../utils/constants";

const WatchPage=()=>{
    const[searchParams]=useSearchParams();
    // console.log(searchParams.get("v"));
    

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
        // getVideoById();
    });

    // const getVideoById= async()=>{
    //     const data = await fetch(MOST_POPULAR_VIDEOS);
    //     const json =  await data.json();
    //     console.log(json.items);


    // };

    return(
        <div className="px-5">
            <iframe width="816"
             height="416" 
             className="rounded-2xl shadow-2xl"
            src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
            title="Janiye Mashup | Jay Guldekar | Vishal Mishra Mashup | Naseeb Se" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             allowFullScreen></iframe>

        </div>
    )
}
export default WatchPage;