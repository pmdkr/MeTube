import { Link } from "react-router-dom";
import { toggleSuggestion } from "../utils/suggestionSlice";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

const SuggestionList = (storage) => {
    const isListOpen = useSelector((store) => store.suggestion.isSuggestionOpen);


    const dispatch = useDispatch();
    const suggestionListHandler = () => {
        dispatch(toggleSuggestion());
    }

    //need to check this below line for more details
    const suggestions = storage.storage;
    // console.log(suggestions);

    return !isListOpen ? null : (
        <div><div className="bg-white px-5 w-[41.666667%] shadow-lg rounded-lg absolute ">
            <ul>
                {suggestions?.map((item, index) =>
                    <Link to={"/search?v=" + suggestions[index]} key={index}>
                        <li className="p-1 py-1 hover:bg-gray-200 flex"
                            onClick={() => suggestionListHandler()}

                        >
                            <img alt="searchiconss" className="h-4 mt-1 mr-2"
                                src="https://www.iconpacks.net/icons/2/free-search-icon-2903-thumb.png" /> {item}

                        </li>

                    </Link>


                )}


            </ul>
        </div></div>
    )

}

export default SuggestionList;