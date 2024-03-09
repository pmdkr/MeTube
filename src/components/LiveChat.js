import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomMessage } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {

            //API polling
            // console.log("API Polling");
            dispatch(addMessage({
                name: generateRandomName(),
                message: randomMessage(25) + " 🚀",
            }))

        }, 1500);

        return () => clearInterval(i);

    }, []);

    return (
        <>
            <div className="ml-6 p-2 border border-black h-[396px] bg-gray-100 rounded-t-lg overflow-y-scroll">
                {
                    // Disclaimer : never used index as key in map

                    chatMessages.map((c, i) =>
                        <ChatMessage key={i} name={c.name} message={c.message}
                        />)
                }

            </div>
            <form className="p-2 ml-6 border border-black flex" onSubmit={(e) => {
                e.preventDefault();
                console.log(" On FOrm submit "+ liveMessage);
                dispatch(addMessage({
                    name:"Pramod",
                    message:liveMessage
                }));
                setLiveMessage("");
            }}>
                <input type="text" className="w-96 border border-black px-2" value={liveMessage}
                    onChange={(e) => {
                        setLiveMessage(e.target.value);
                    }}></input>
                <button className="bg-green-200 mx-2 px-2 rounded-md"  >Send</button>

            </form>
        </>
    )
}
export default LiveChat;
