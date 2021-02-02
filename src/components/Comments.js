import video from "../data/video.js";
import { useState } from "react";

function Comments({user, comment}) {
    const [commentUpvote, setCommentUpvote] = useState(0);
    const [commentDownvote, setCommentDownvote] = useState(0);
    
    function handleCommentUpvoteClick() {
        setCommentUpvote((commentUpvote) => commentUpvote + 1)
    }

    function handleCommentDownvoteClick() {
        setCommentDownvote((commentDownvote) => commentDownvote + 1);
    }

    return (
        <div>
            <h4>{user}</h4>
            <p>{comment}</p>
            <button onClick={handleCommentUpvoteClick}>{commentUpvote} 👍</button>
            <button onClick={handleCommentDownvoteClick}>{commentDownvote} 👎</button>
        </div>
    )
}



export default Comments;