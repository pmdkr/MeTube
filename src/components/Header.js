import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
// import { Link } from "react-router-dom";

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuhandler = () => {
        dispatch(toggleMenu());



    }

    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">
            <div className="flex col-span-1 ">
                <img className="h-6 ml-8 mr-4 cursor-pointer"
                    onClick={() => toggleMenuhandler()}
                    alt="hamberger"
                    src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
                />
                <a href ="/">
                    <img className="h-6 mx-2 ml-4" alt="youtubeIcon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
                    />
                </a>
            </div>
            <div className=" flex col-span-10 justify-start">
                <input className="border border-gray-400 w-1/2 px-5 rounded-l-full" type="text" name="search" />
                <button className="border border-gray-400 rounded-r-full px-2 bg-gray-100 cursor-pointer" >
                    <img className=" h-4" alt="searchbtn"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
                    /></button>
            </div>
            <div className="flex  col-span-1" >
                <img className="h-6" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>

        </div>
    )
}

export default Header;

