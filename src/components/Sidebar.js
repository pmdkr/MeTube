import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className=" pt-4 shadow-lg w-48 m-2">
            <ul className="m-2 p-2">
                <Link to="/"><li className="font-semibold text-sm py-2 mx-4">Home</li></Link>
                <li className="text-sm py-2 mx-4">Subscriptions</li>
                <li className="text-sm py-2 mx-4">Shorts</li>
                <li className="text-sm py-2 mx-4">YT Music</li>
                <li className="font-semibold text-sm py-2 mx-4">History</li>
                <li className="text-sm py-2 mx-4">Downloads</li>
                <li className="text-sm py-2 mx-4">Liked videos</li>
                <li className="font-semibold text-sm py-2 mx-4">Music</li>
                <li className="text-sm py-2 mx-4">Shorts</li>
                <li className="text-sm py-2 mx-4">Live</li>
                <li className="text-sm py-2 mx-4">Music</li>

            </ul>


        </div>
    )
}
export default Sidebar;
