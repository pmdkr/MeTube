import Comment from "./Comment";


const CommentList=({comments})=>{
    // Disclaimer: Don't use indexes as keys
    return comments.map((comment,index)=>(
        <div key={index}>
            <Comment  data={comment}/>
            <div className="pl-5 border border-l-black ml-5">
                <CommentList comments={comment.replies}/>

            </div>

        </div>
        
    ))


}
const CommentContainer = () => {

    const commentData = [
        {
            name: "Pramod Lohra",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting...",
            replies: []
        },
        {
            name: "Pramod Lohra",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting...",
            replies: [
                {
                    name: "Pramod Lohra",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting...",
                    replies: [
                        {
                            name: "Pramod Lohra",
                            text: "Lorem Ipsum is simply dummy text of the printing and typesetting...",
                            replies: [
                                {
                                    name: "Pramod Lohra",
                                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting...",
                                    replies: [
                                        {
                                            name: "Pramod Lohra",
                                            text: "Lorem Ipsum is simply dummy text of the printing and typesetting...",
                                            replies: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Pramod Lohra",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting...",
            replies: []
        },
        {
            name: "Pramod Lohra",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting...",
            replies: []
        },
        {
            name: "Pramod Lohra",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting...",
            replies: []
        }
    ]
    return (
        <div className="mx-5 ml-10 p-2">
            <h1 className="font-bold">Comments :</h1>
            <CommentList comments={commentData}/>

        </div>
    )
}
export default CommentContainer;