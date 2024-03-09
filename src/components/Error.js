import { Link } from "react-router-dom";
const Error=()=>{


    return(
        <div className="p-2 m-2 text-center">
            <h1 className="font-medium">Something went wrong</h1>
            <h3 className="font-medium">please try later</h3>
            <Link to="/" className="font-medium"> Home</Link>
        </div>
    )
}
export default Error;