import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const toggleMenuhandler = () => {
        dispatch(toggleMenu());
    }
    const searchCache = useSelector((store) => store.search);

    /**
     * searchCache ={
     *   "iphone": ["iphone","iphone 11","iphone 14"]
     * }
     * 
     *  searchQuery= iphone
     * 
     */


    useEffect(() => {
        // API CALL
        //make an API call after every key press

        // but if the diffrence between two api call <200 ms
        // -> then decline the api call
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);

            } else {
                getSearchSuggestion();

            }

        }, 200);

        return () => {
            clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);


    const getSearchSuggestion = async () => {
        console.log("API CALL-" + searchQuery);
        const data = await fetch(SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);

        // update cache
        dispatch(
            cacheResults({
                [searchQuery]: json[1],
            })
        )



    };


    return (
        <div className="grid grid-flow-col p-4 m-2 shadow-lg">
            <div className="flex col-span-1 ">
                <img className="h-8 mx-8 cursor-pointer"
                    onClick={() => toggleMenuhandler()}
                    alt="hamberger"
                    src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
                />
                <a href="/">
                    <img className="h-8" alt="youtubeIcon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
                    />
                </a>


            </div>
            <div className="col-span-10 px-10">
                <div className="flex">
                    <input className=" w-1/2 border border-gray-400 px-5 rounded-l-full"
                        type="text"
                        name="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                    />
                    <button className="border border-gray-400 rounded-r-full py-1 px-4 bg-gray-100 cursor-pointer" >
                        <img className=" h-6" alt="searchbtn"
                            src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
                        />
                    </button>

                </div>
                {showSuggestion && (<div className="fixed bg-white shadow-lg rounded-lg w-96 border border-gray-100">
                    <ul>
                        {suggestions?.map((s) =>
                            <li key={s} className="px-5 py-1 hover:bg-gray-100 shadow-sm flex">
                                <img alt="searchiconss" className="h-4 mt-1 mr-2"
                                    src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png" /> {s}
                            </li>
                        )}


                    </ul>
                </div>)
                }

            </div>
            <div className="flex  col-span-1" >
                <img className="h-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>

        </div>
    )
}

export default Header;

